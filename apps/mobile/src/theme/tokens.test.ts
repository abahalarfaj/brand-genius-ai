import { describe, expect, it } from "vitest";
import { contrastRatio } from "./contrast";
import { colors, palette } from "./tokens";

describe("brand palette", () => {
  it("keeps the approved brand colors unchanged", () => {
    expect(palette).toEqual({ lavender: "#A78BFA", white: "#FFFFFF", black: "#111111" });
  });

  it("uses black text on lavender (approved rule)", () => {
    expect(colors.onPrimary).toBe("#111111");
  });

  it("black on lavender passes WCAG AA for normal text (>= 4.5)", () => {
    expect(contrastRatio(palette.black, palette.lavender)).toBeGreaterThanOrEqual(4.5);
  });

  it("white on lavender fails AA, which is why it is not used", () => {
    expect(contrastRatio(palette.white, palette.lavender)).toBeLessThan(4.5);
  });

  it("main and muted text on white pass AA", () => {
    expect(contrastRatio(colors.text, colors.background)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(colors.textMuted, colors.background)).toBeGreaterThanOrEqual(4.5);
  });
});
