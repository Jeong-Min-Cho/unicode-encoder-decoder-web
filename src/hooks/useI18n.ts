import { createSignal, createEffect, onMount } from "solid-js";

export type Language = "en" | "ko";

const translations = {
  en: {
    title: "Unicode Encoder/Decoder",
    poweredBy: "Powered by",
    encode: "Encode",
    decode: "Decode",
    outputFormat: "Output Format",
    options: "Options",
    preserveAscii: "Preserve ASCII",
    preserveAsciiDesc: "Keep A-Z, a-z, 0-9, etc.",
    preserveLatin1: "Preserve Latin-1",
    preserveLatin1Desc: "Keep accented chars like é, ñ",
    uppercase: "Uppercase",
    uppercaseDesc: "Use uppercase hex digits",
    inputText: "Input (Text)",
    inputEscaped: "Input (Escaped)",
    outputEscaped: "Output (Escaped)",
    outputText: "Output (Text)",
    placeholderEncode: "Enter text to encode... e.g., Hello 안녕 😀",
    placeholderDecode: "Enter escaped text... e.g., \\uC548\\uB155",
    placeholderResult: "Result will appear here...",
    chars: "chars",
    codePoints: "code points",
    codePointsTooltip: "Actual Unicode characters. Emoji count as 1 code point but 2 chars in JavaScript.",
    copy: "Copy",
    copied: "Copied!",
    swap: "Swap",
    clear: "Clear",
    builtWith: "Built with",
    viewOnGithub: "View on GitHub",
    light: "Light",
    dark: "Dark",
  },
  ko: {
    title: "유니코드 인코더/디코더",
    poweredBy: "Powered by",
    encode: "인코딩",
    decode: "디코딩",
    outputFormat: "출력 형식",
    options: "옵션",
    preserveAscii: "ASCII 유지",
    preserveAsciiDesc: "A-Z, a-z, 0-9 등 유지",
    preserveLatin1: "Latin-1 유지",
    preserveLatin1Desc: "é, ñ 같은 악센트 문자 유지",
    uppercase: "대문자",
    uppercaseDesc: "16진수를 대문자로 표시",
    inputText: "입력 (텍스트)",
    inputEscaped: "입력 (이스케이프)",
    outputEscaped: "출력 (이스케이프)",
    outputText: "출력 (텍스트)",
    placeholderEncode: "인코딩할 텍스트를 입력하세요... 예: Hello 안녕 😀",
    placeholderDecode: "이스케이프된 텍스트를 입력하세요... 예: \\uC548\\uB155",
    placeholderResult: "결과가 여기에 표시됩니다...",
    chars: "문자",
    codePoints: "코드 포인트",
    codePointsTooltip: "실제 유니코드 문자 수. 이모지는 JavaScript에서 2문자지만 1코드 포인트입니다.",
    copy: "복사",
    copied: "복사됨!",
    swap: "교환",
    clear: "지우기",
    builtWith: "Built with",
    viewOnGithub: "GitHub에서 보기",
    light: "라이트",
    dark: "다크",
  },
} as const;

export type TranslationKey = keyof typeof translations.en;

export function useI18n() {
  const [lang, setLang] = createSignal<Language>("en");

  onMount(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    const browserLang = navigator.language.startsWith("ko") ? "ko" : "en";
    const initialLang = stored || browserLang;
    setLang(initialLang);
  });

  createEffect(() => {
    localStorage.setItem("lang", lang());
    document.documentElement.lang = lang();
  });

  const t = (key: TranslationKey): string => {
    return translations[lang()][key];
  };

  const toggleLang = () => {
    setLang((l) => (l === "en" ? "ko" : "en"));
  };

  return { lang, setLang, t, toggleLang };
}
