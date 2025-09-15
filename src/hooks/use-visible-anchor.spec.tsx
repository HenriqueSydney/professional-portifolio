import React, { FC } from "react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, act } from "@testing-library/react";
import { useVisibleAnchor } from "@/hooks/use-visible-anchor";

// Mock IntersectionObserver
let mockObserverInstances: MockIntersectionObserver[] = [];

class MockIntersectionObserver {
  callback: IntersectionObserverCallback;
  options: IntersectionObserverInit;
  elements: Element[] = [];

  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {
    this.callback = callback;
    this.options = options || {};
    mockObserverInstances.push(this);
  }

  observe = vi.fn((element: Element) => {
    this.elements.push(element);
  });

  unobserve = vi.fn((element: Element) => {
    this.elements = this.elements.filter((el) => el !== element);
  });

  disconnect = vi.fn(() => {
    this.elements = [];
  });

  // Helper method to trigger intersection
  triggerIntersection(entries: Partial<IntersectionObserverEntry>[]) {
    const fullEntries = entries.map((entry) => ({
      boundingClientRect:
        entry.boundingClientRect ||
        ({
          top: entry.isIntersecting ? 100 : -100,
          bottom: entry.isIntersecting ? 200 : 0,
          left: 0,
          right: 100,
          width: 100,
          height: 100,
          x: 0,
          y: entry.isIntersecting ? 100 : -100,
        } as DOMRectReadOnly),
      intersectionRatio: entry.isIntersecting ? 1 : 0,
      intersectionRect: {} as DOMRectReadOnly,
      isIntersecting: false,
      rootBounds: {} as DOMRectReadOnly,
      target: entry.target as Element,
      time: Date.now(),
      ...entry,
    })) as IntersectionObserverEntry[];

    this.callback(fullEntries, this as any);
  }
}

// Mock querySelector to return elements with IDs
const createMockElement = (id: string) => ({
  id: id.replace("#", ""),
  getBoundingClientRect: vi.fn(() => ({
    top: 100,
    bottom: 200,
    left: 0,
    right: 100,
    width: 100,
    height: 100,
    x: 0,
    y: 100,
  })),
});

const mockElements = new Map();

beforeEach(() => {
  mockObserverInstances = [];
  mockElements.clear();

  (global as any).IntersectionObserver = MockIntersectionObserver;

  // Mock document.querySelector
  const originalQuerySelector = document.querySelector;
  vi.spyOn(document, "querySelector").mockImplementation((selector: string) => {
    if (mockElements.has(selector)) {
      return mockElements.get(selector);
    }
    return null;
  });
});

afterEach(() => {
  vi.clearAllMocks();
  mockObserverInstances = [];
  mockElements.clear();
  vi.restoreAllMocks();
});

// Test component to use the hook
const TestComponent: FC<{
  anchorIds: string[];
  options?: Parameters<typeof useVisibleAnchor>[1];
}> = ({ anchorIds, options }) => {
  const visibleAnchor = useVisibleAnchor(anchorIds, options);

  return (
    <div data-testid="visible-anchor-container">
      <span data-testid="visible-anchor">{visibleAnchor}</span>
      <div data-testid="anchor-count">{anchorIds.length}</div>
    </div>
  );
};

describe("useVisibleAnchor", () => {
  const setupMockElements = (ids: string[]) => {
    ids.forEach((id) => {
      const element = createMockElement(id);
      mockElements.set(id, element);
    });
  };

  it("should initialize with empty string", () => {
    const anchorIds = ["#section1", "#section2"];
    setupMockElements(anchorIds);

    const { getByTestId } = render(<TestComponent anchorIds={anchorIds} />);

    const visibleAnchor = getByTestId("visible-anchor");
    expect(visibleAnchor.textContent).toBe("");
  });

  it("should return visible anchor when element intersects", async () => {
    const anchorIds = ["#section1", "#section2"];
    setupMockElements(anchorIds);

    const { getByTestId } = render(<TestComponent anchorIds={anchorIds} />);

    const observerInstance = mockObserverInstances[0];
    const mockElement = mockElements.get("#section1");

    // Trigger intersection for section1
    act(() => {
      observerInstance.triggerIntersection([
        {
          isIntersecting: true,
          target: mockElement,
          boundingClientRect: {
            top: 50,
            bottom: 150,
            left: 0,
            right: 100,
            width: 100,
            height: 100,
            x: 0,
            y: 50,
          } as DOMRectReadOnly,
        },
      ]);
    });

    const visibleAnchor = getByTestId("visible-anchor");
    expect(visibleAnchor.textContent).toBe("#section1");
  });

  it("should return closest anchor when multiple elements intersect", async () => {
    const anchorIds = ["#section1", "#section2", "#section3"];
    setupMockElements(anchorIds);

    const { getByTestId } = render(<TestComponent anchorIds={anchorIds} />);

    const observerInstance = mockObserverInstances[0];
    const mockElement1 = mockElements.get("#section1");
    const mockElement2 = mockElements.get("#section2");

    // Trigger intersection for both sections, section2 closer to top
    act(() => {
      observerInstance.triggerIntersection([
        {
          isIntersecting: true,
          target: mockElement1,
          boundingClientRect: {
            top: 100, // Further from top
            bottom: 200,
            left: 0,
            right: 100,
            width: 100,
            height: 100,
            x: 0,
            y: 100,
          } as DOMRectReadOnly,
        },
        {
          isIntersecting: true,
          target: mockElement2,
          boundingClientRect: {
            top: 50, // Closer to top
            bottom: 150,
            left: 0,
            right: 100,
            width: 100,
            height: 100,
            x: 0,
            y: 50,
          } as DOMRectReadOnly,
        },
      ]);
    });

    const visibleAnchor = getByTestId("visible-anchor");
    expect(visibleAnchor.textContent).toBe("#section2");
  });

  it("should clear visible anchor when no elements intersect", async () => {
    const anchorIds = ["#section1"];
    setupMockElements(anchorIds);

    const { getByTestId } = render(<TestComponent anchorIds={anchorIds} />);

    const observerInstance = mockObserverInstances[0];
    const mockElement = mockElements.get("#section1");

    // First set an anchor as visible
    act(() => {
      observerInstance.triggerIntersection([
        { isIntersecting: true, target: mockElement },
      ]);
    });

    expect(getByTestId("visible-anchor").textContent).toBe("#section1");

    // Then trigger no intersections
    act(() => {
      observerInstance.triggerIntersection([
        { isIntersecting: false, target: mockElement },
      ]);
    });

    const visibleAnchor = getByTestId("visible-anchor");
    expect(visibleAnchor.textContent).toBe("");
  });

  it("should handle custom options", () => {
    const anchorIds = ["#section1"];
    setupMockElements(anchorIds);

    const customOptions = {
      threshold: 0.5,
      rootMargin: "-50px 0px -25% 0px",
    };

    render(<TestComponent anchorIds={anchorIds} options={customOptions} />);

    const observerInstance = mockObserverInstances[0];
    expect(observerInstance.options.threshold).toBe(0.5);
    expect(observerInstance.options.rootMargin).toBe("-50px 0px -25% 0px");
  });

  it("should use default options when none provided", () => {
    const anchorIds = ["#section1"];
    setupMockElements(anchorIds);

    render(<TestComponent anchorIds={anchorIds} />);

    const observerInstance = mockObserverInstances[0];
    expect(observerInstance.options.threshold).toBe(0.3);
    expect(observerInstance.options.rootMargin).toBe("-100px 0px -50% 0px");
  });

  it("should observe all valid elements", () => {
    const anchorIds = ["#section1", "#section2", "#section3"];
    setupMockElements(anchorIds);

    render(<TestComponent anchorIds={anchorIds} />);

    const observerInstance = mockObserverInstances[0];
    expect(observerInstance.observe).toHaveBeenCalledTimes(3);
  });

  it("should filter out non-existent elements", () => {
    const anchorIds = ["#section1", "#nonexistent", "#section2"];
    // Only setup section1 and section2
    setupMockElements(["#section1", "#section2"]);

    render(<TestComponent anchorIds={anchorIds} />);

    const observerInstance = mockObserverInstances[0];
    // Should only observe existing elements
    expect(observerInstance.observe).toHaveBeenCalledTimes(2);
  });

  it("should disconnect observer on unmount", () => {
    const anchorIds = ["#section1"];
    setupMockElements(anchorIds);

    const { unmount } = render(<TestComponent anchorIds={anchorIds} />);

    const observerInstance = mockObserverInstances[0];
    unmount();

    expect(observerInstance.disconnect).toHaveBeenCalled();
  });

  it("should handle empty anchor list", () => {
    const { getByTestId } = render(<TestComponent anchorIds={[]} />);

    const visibleAnchor = getByTestId("visible-anchor");
    expect(visibleAnchor.textContent).toBe("");

    // Should not create an observer for empty list
    expect(mockObserverInstances).toHaveLength(0);
  });

  it("should update when anchorIds change", () => {
    const anchorIds1 = ["#section1"];
    const anchorIds2 = ["#section1", "#section2"];

    setupMockElements(anchorIds2);

    const { rerender } = render(<TestComponent anchorIds={anchorIds1} />);

    expect(mockObserverInstances[0].observe).toHaveBeenCalledTimes(1);

    // Disconnect previous observer when anchorIds change
    const firstObserver = mockObserverInstances[0];

    rerender(<TestComponent anchorIds={anchorIds2} />);

    // Should disconnect previous and create new observer
    expect(firstObserver.disconnect).toHaveBeenCalled();
    expect(mockObserverInstances).toHaveLength(2);
    expect(mockObserverInstances[1].observe).toHaveBeenCalledTimes(2);
  });

  it("should handle absolute positioning correctly", async () => {
    const anchorIds = ["#section1", "#section2"];
    setupMockElements(anchorIds);

    const { getByTestId } = render(<TestComponent anchorIds={anchorIds} />);

    const observerInstance = mockObserverInstances[0];
    const mockElement1 = mockElements.get("#section1");
    const mockElement2 = mockElements.get("#section2");

    // Test with negative top values (elements above viewport)
    act(() => {
      observerInstance.triggerIntersection([
        {
          isIntersecting: true,
          target: mockElement1,
          boundingClientRect: {
            top: -50, // Above viewport but intersecting
            bottom: 50,
            left: 0,
            right: 100,
            width: 100,
            height: 100,
            x: 0,
            y: -50,
          } as DOMRectReadOnly,
        },
        {
          isIntersecting: true,
          target: mockElement2,
          boundingClientRect: {
            top: -30, // Closer to viewport top
            bottom: 70,
            left: 0,
            right: 100,
            width: 100,
            height: 100,
            x: 0,
            y: -30,
          } as DOMRectReadOnly,
        },
      ]);
    });

    const visibleAnchor = getByTestId("visible-anchor");
    // Should select element with smaller absolute distance from top
    expect(visibleAnchor.textContent).toBe("#section2");
  });
});
