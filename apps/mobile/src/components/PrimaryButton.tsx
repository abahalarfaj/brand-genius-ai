import { Pressable, StyleSheet, type PressableProps } from "react-native";
import { colors, radii, spacing } from "@/theme";
import { AppText } from "./AppText";

export interface PrimaryButtonProps extends Omit<PressableProps, "children"> {
  label: string;
}

/** زر رئيسي: خلفية خزامي ونص أسود (الأبيض على الخزامي تباينه ضعيف). */
export function PrimaryButton({ label, style, disabled, ...rest }: PrimaryButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      {...rest}
      style={(state) => [
        styles.base,
        state.pressed && styles.pressed,
        disabled && styles.disabled,
        typeof style === "function" ? style(state) : style,
      ]}
    >
      <AppText weight="bold" size="md" style={styles.label}>
        {label}
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.primary,
    borderRadius: radii.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: "center",
  },
  pressed: { opacity: 0.85 },
  disabled: { opacity: 0.5 },
  label: { color: colors.onPrimary },
});
