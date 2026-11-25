/**
 * مِيعاد — Design tokens.
 * المصدر الوحيد للألوان والخطوط والمسافات. لا تكتب ألواناً مباشرة في المكونات.
 *
 * قرار معتمد: الألوان الأساسية الثلاثة (الخزامي، الأبيض، الأسود).
 * قرار معتمد: النص على الخزامي يكون بالأسود #111111.
 * قرار مفتوح: لون الشعار الأغمق مقابل الخزامي — الواجهة تلتزم بـ #A78BFA.
 */

export const palette = {
  lavender: "#A78BFA",
  white: "#FFFFFF",
  black: "#111111",
} as const;

/**
 * درجات مشتقة للحدود والخلفيات الخفيفة والنص الثانوي.
 * فرضية: مشتقة رياضياً من الألوان الثلاثة (شفافية/مزج) ولا تُعد ألواناً جديدة للهوية.
 * تُراجع بعد قراءة النموذج المرجعي.
 */
export const derived = {
  lavenderSoft: "#EDE7FE", // خزامي ممزوج بالأبيض ~18%
  blackMuted: "#5C5C5C", // أسود ممزوج بالأبيض ~70%: نص ثانوي
  border: "#E6E6E6",
  surface: "#F7F7F8",
} as const;

export const colors = {
  primary: palette.lavender,
  onPrimary: palette.black,
  background: palette.white,
  surface: derived.surface,
  text: palette.black,
  textMuted: derived.blackMuted,
  border: derived.border,
  primarySoft: derived.lavenderSoft,
} as const;

export const fonts = {
  regular: "Tajawal_400Regular",
  medium: "Tajawal_500Medium",
  bold: "Tajawal_700Bold",
} as const;

export const fontSizes = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

export const radii = {
  sm: 8,
  md: 12,
  lg: 20,
  pill: 999,
} as const;

export const tokens = { palette, colors, fonts, fontSizes, spacing, radii } as const;
export type Tokens = typeof tokens;
