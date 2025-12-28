import type { Component } from "solid-js";
import type { Mode } from "../hooks/useConverter";

interface ModeToggleProps {
  mode: Mode;
  onModeChange: (mode: Mode) => void;
}

const ModeToggle: Component<ModeToggleProps> = (props) => {
  return (
    <div class="flex items-center gap-1 p-1 rounded-xl" style={{ "background-color": "var(--bg-tertiary)" }}>
      <button
        class={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
          props.mode === "encode"
            ? "bg-primary-500 text-white shadow-md"
            : ""
        }`}
        style={{
          color: props.mode === "encode" ? undefined : "var(--text-secondary)",
        }}
        onClick={() => props.onModeChange("encode")}
      >
        Encode
      </button>
      <button
        class={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
          props.mode === "decode"
            ? "bg-primary-500 text-white shadow-md"
            : ""
        }`}
        style={{
          color: props.mode === "decode" ? undefined : "var(--text-secondary)",
        }}
        onClick={() => props.onModeChange("decode")}
      >
        Decode
      </button>
    </div>
  );
};

export default ModeToggle;
