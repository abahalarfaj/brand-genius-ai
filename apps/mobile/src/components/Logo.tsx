import { StyleSheet, View } from "react-native";
import { colors, radii, spacing } from "@/theme";
import { AppText } from "./AppText";

/**
 * ⚠️ عنصر مؤقت (PLACEHOLDER) — ليس الشعار.
 *
 * ملفات الشعار لم تُرفع بعد إلى assets/brand/. القاعدة المعتمدة: يُستخدم الشعار كما هو
 * دون إعادة رسمه أو تغيير ألوانه، لذلك لا نرسم شعاراً هنا. هذا إطار منقّط باسم التطبيق
 * فقط ليبقى التخطيط صحيحاً. عند وصول الملفات يُستبدل محتوى المكوّن بـ <Image> من assets/brand/.
 */
export const LOGO_IS_PLACEHOLDER = true;

export function Logo({ size = 96 }: { size?: number }) {
  return (
    <View
      accessibilityRole="image"
      accessibilityLabel="شعار مِيعاد (مؤقت)"
      style={[styles.box, { width: size * 1.6, height: size }]}
    >
      <AppText weight="bold" size="xl">
        مِيعاد
      </AppText>
      <AppText size="xs" muted>
        مكان الشعار
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 1.5,
    borderStyle: "dashed",
    borderColor: colors.primary,
    borderRadius: radii.md,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xs,
  },
});
