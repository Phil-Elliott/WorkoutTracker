import { describe, it, expect } from "vitest";

// The two tests marked with concurrent will be run in parallel
describe("suite", () => {
  it("it works", () => {
    expect(1).toBe(1);
  });
});
