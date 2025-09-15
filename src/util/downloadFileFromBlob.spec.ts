import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { downloadFileFromBlob } from "@/util/downloadFileFromBlob";

describe("downloadFileFromBlob", () => {
  let createObjectURLMock: any;
  let revokeObjectURLMock: any;
  let appendChildMock: any;
  let removeChildMock: any;
  let clickMock: any;

  beforeEach(() => {
    // Mock de URL
    createObjectURLMock = vi.fn().mockReturnValue("blob:url");
    revokeObjectURLMock = vi.fn();
    (globalThis as any).URL = {
      createObjectURL: createObjectURLMock,
      revokeObjectURL: revokeObjectURLMock,
    };

    // Mock de DOM
    clickMock = vi.fn();
    appendChildMock = vi.fn();
    removeChildMock = vi.fn();

    (globalThis as any).document = {
      createElement: vi
        .fn()
        .mockReturnValue({ href: "", download: "", click: clickMock }),
      body: {
        appendChild: appendChildMock,
        removeChild: removeChildMock,
      },
    };
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should create a download link and click it", () => {
    const blob = new Blob(["Hello World"], { type: "text/plain" });

    downloadFileFromBlob(blob);

    expect(createObjectURLMock).toHaveBeenCalledWith(blob);
    expect(appendChildMock).toHaveBeenCalled();
    expect(clickMock).toHaveBeenCalled();
    expect(removeChildMock).toHaveBeenCalled();
    expect(revokeObjectURLMock).toHaveBeenCalledWith("blob:url");
  });
});
