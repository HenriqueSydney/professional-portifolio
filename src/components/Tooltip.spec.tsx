import React from "react";
import { describe, it, expect, afterEach } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tooltip } from "./Tooltip";
import { TooltipProvider } from "@radix-ui/react-tooltip";

describe("Tooltip", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render children", () => {
    render(
      <TooltipProvider>
        <Tooltip description="Tooltip description 1">
          <button>Hover me 1</button>
        </Tooltip>
      </TooltipProvider>
    );

    expect(screen.getByText("Hover me 1")).toBeDefined();
  });

  it("should display description when hovered", async () => {
    render(
      <TooltipProvider>
        <Tooltip description="Tooltip description 2">
          <button>Hover me 2</button>
        </Tooltip>
      </TooltipProvider>
    );

    const button = screen.getByText("Hover me 2");
    await userEvent.hover(button);

    const tooltip = (await screen.findAllByText("Tooltip description 2"))[0];
    expect(tooltip).toBeVisible();
  });

  it("should apply additional className", async () => {
    render(
      <TooltipProvider>
        <Tooltip description="Tooltip description 3" className="custom-class">
          <button>Hover me 3</button>
        </Tooltip>
      </TooltipProvider>
    );

    const button = screen.getByText("Hover me 3");
    await userEvent.hover(button);

    // pegar todos os tooltips com o texto e filtrar pelo que tem a classe
    const tooltipElements = await screen.findAllByText("Tooltip description 3");

    const tooltipContent = tooltipElements
      .map((el) => el.parentElement)
      .find((el) => el?.classList.contains("custom-class"));

    expect(tooltipContent).toBeDefined();
    expect(tooltipContent).toHaveClass("custom-class");
  });
});
