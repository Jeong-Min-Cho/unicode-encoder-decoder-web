import { type Component, For } from "solid-js";
import type { EscapeFormat } from "unicode-escaper";

interface FormatOption {
  value: EscapeFormat;
  label: string;
  example: string;
}

const formats: FormatOption[] = [
  { value: "unicode", label: "\\uXXXX", example: "\\u4E16" },
  { value: "unicode-es6", label: "\\u{X}", example: "\\u{4E16}" },
  { value: "hex", label: "\\xNN", example: "\\xE9" },
  { value: "html-hex", label: "&#xN;", example: "&#x4E16;" },
  { value: "html-decimal", label: "&#N;", example: "&#19990;" },
  { value: "codepoint", label: "U+XXXX", example: "U+4E16" },
];

interface FormatSelectorProps {
  format: EscapeFormat;
  onFormatChange: (format: EscapeFormat) => void;
  disabled?: boolean;
}

const FormatSelector: Component<FormatSelectorProps> = (props) => {
  return (
    <div class={`flex flex-wrap gap-2 ${props.disabled ? "opacity-50 pointer-events-none" : ""}`}>
      <For each={formats}>
        {(fmt) => (
          <button
            class={`format-chip ${props.format === fmt.value ? "active" : ""}`}
            onClick={() => props.onFormatChange(fmt.value)}
            title={`Example: ${fmt.example}`}
          >
            {fmt.label}
          </button>
        )}
      </For>
    </div>
  );
};

export default FormatSelector;
