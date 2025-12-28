import type { Component } from "solid-js";
import type { Mode } from "../hooks/useConverter";
import type { TranslationKey } from "../hooks/useI18n";

interface ModeToggleProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
  t: (key: TranslationKey) => string;
}

const ModeToggle: Component<ModeToggleProps> = (props) => {
  return (
    <div class="flex items-center gap-1 p-1 rounded-xl" style={{ "background-color": "var(--bg-tertiary)" }}>
      <button
        class={`px-4 py-2 rounded-lg font-medium transition-all ${props.mode === "encode" ? "bg-white dark:bg-gray-700 shadow-sm" : ""}`}
        style={{
          color: props.mode === "encode" ? undefined : "var(--text-secondary)",
        }}
        onClick={() => props.onModeChange("encode")}
      >
        {props.t("encode")}
      </button>
      <button
        class={`px-4 py-2 rounded-lg font-medium transition-all ${props.mode === "decode" ? "bg-white dark:bg-gray-700 shadow-sm" : ""}`}
        style={{
          color: props.mode === "decode" ? undefined : "var(--text-secondary)",
        }}
        onClick={() => props.onModeChange("decode")}
      >
        {props.t("decode")}
      </button>
    </div>
  );
};

export default ModeToggle;
