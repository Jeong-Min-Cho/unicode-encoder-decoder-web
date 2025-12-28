import type { Component } from "solid-js";
import type { ConverterOptions } from "../hooks/useConverter";

interface OptionsPanelProps {
  options: ConverterOptions;
  onOptionChange: <K extends keyof ConverterOptions>(
    key: K,
    value: ConverterOptions[K]
  ) => void;
  disabled?: boolean;
}

interface ToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
}

const Toggle: Component<ToggleProps> = (props) => {
  return (
    <label class="flex items-center gap-3 cursor-pointer group">
      <button
        type="button"
        role="switch"
        aria-checked={props.checked}
        class={`toggle-switch ${props.checked ? "active" : ""}`}
        onClick={() => props.onChange(!props.checked)}
      >
        <span class="toggle-dot" />
      </button>
      <div>
        <span class="font-medium" style={{ color: "var(--text-primary)" }}>
          {props.label}
        </span>
        {props.description && (
          <p class="text-xs" style={{ color: "var(--text-muted)" }}>
            {props.description}
          </p>
        )}
      </div>
    </label>
  );
};

const OptionsPanel: Component<OptionsPanelProps> = (props) => {
  return (
    <div
      class={`flex flex-wrap gap-6 ${props.disabled ? "opacity-50 pointer-events-none" : ""}`}
    >
      <Toggle
        label="Preserve ASCII"
        checked={props.options.preserveAscii}
        onChange={(v) => props.onOptionChange("preserveAscii", v)}
        description="Keep A-Z, a-z, 0-9, etc."
      />
      <Toggle
        label="Preserve Latin-1"
        checked={props.options.preserveLatin1}
        onChange={(v) => props.onOptionChange("preserveLatin1", v)}
        description="Keep accented chars like é, ñ"
      />
      <Toggle
        label="Uppercase"
        checked={props.options.uppercase}
        onChange={(v) => props.onOptionChange("uppercase", v)}
        description="Use uppercase hex digits"
      />
    </div>
  );
};

export default OptionsPanel;
