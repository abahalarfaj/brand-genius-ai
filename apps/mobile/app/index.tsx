import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppText } from "@/components/AppText";
import { Logo } from "@/components/Logo";
import { PrimaryButton } from "@/components/PrimaryButton";
import { strings } from "@/i18n/strings";
import { colors, spacing } from "@/theme";

/**
 * شاشة المرحلة 1: تتحقق من الهوية (tokens) والخط والاتجاه فقط.
 * تُستبدل في المرحلة 2 بشاشات النموذج المرجعي.
 */
export default function Index() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.center}>
        <Logo />
        <AppText weight="medium" size="lg">
          {strings.slogan}
        </AppText>
      </View>
      <PrimaryButton label="تسجيل" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background, padding: spacing.lg },
  center: { flex: 1, alignItems: "center", justifyContent: "center", gap: spacing.md },
});
