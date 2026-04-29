import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "../src/App";

describe("App", () => {
  it("renders the Vite starter shell with plain links", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /vite, bun, vitest e shadcn/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /ver vite/i })).toHaveAttribute(
      "href",
      "https://vite.dev",
    );
  });
});
