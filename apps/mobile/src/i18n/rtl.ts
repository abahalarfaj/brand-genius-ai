import { I18nManager, Platform } from "react-native";

/**
 * الواجهة عربية RTL بالكامل (قرار معتمد).
 * على iOS/Android يفرض إعداد expo-localization (extra.forcesRTL في app.json) الاتجاه عند البناء،
 * وهذه الدالة احتياط وقت التشغيل. على الويب نضبط dir/lang على عنصر الجذر.
 */
export function ensureRTL(): void {
  if (Platform.OS === "web") {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("dir", "rtl");
      document.documentElement.setAttribute("lang", "ar");
    }
    return;
  }
  if (!I18nManager.isRTL) {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
  }
}
