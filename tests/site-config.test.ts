import { describe, expect, it } from "vitest";

import { siteConfig } from "../lib/site-config";

describe("siteConfig", () => {
  it("exposes the starter identity", () => {
    expect(siteConfig.name).toBe("Template Vite");
    expect(siteConfig.description.length).toBeGreaterThan(40);
  });
});
