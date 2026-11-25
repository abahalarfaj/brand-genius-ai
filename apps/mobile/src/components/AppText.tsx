import { StyleSheet, Text, type TextProps } from "react-native";
import { colors, fonts, fontSizes } from "@/theme";

type Weight = "regular" | "medium" | "bold";

export interface AppTextProps extends TextProps {
  weight?: Weight;
  size?: keyof typeof fontSizes;
  muted?: boolean;
}

/** كل نص في التطبيق يمر من هنا لضمان الخط والاتجاه والألوان من الـtokens. */
export function AppText({ weight = "regular", size = "md", muted, style, ...rest }: AppTextProps) {
  return (
    <Text
      {...rest}
      style={[
        styles.base,
        { fontFamily: fonts[weight], fontSize: fontSizes[size] },
        muted && styles.muted,
        style,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  base: { color: colors.text, writingDirection: "rtl" },
  muted: { color: colors.textMuted },
});
