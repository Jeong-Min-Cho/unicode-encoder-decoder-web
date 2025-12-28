import type { Component } from "solid-js";
import type { ConverterOptions } from "../hooks/useConverter";
import type { TranslationKey } from "../hooks/useI18n";

interface OptionsPanelProps {
  options: ConverterOptions;
  onOptionChange: <K extends keyof ConverterOptions>(
    key: K,
    value: ConverterOptions[K]
  ) => void;
  disabled?: boolean;
  t: (key: TranslationKey) => string;
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
        class={`toggle ${props.checked ? "toggle-checked" : ""}`}
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
      class="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6"
    >
      <Toggle
        label={props.t("preserveAscii")}
        checked={props.options.preserveAscii}
        onChange={(v) => props.onOptionChange("preserveAscii", v)}
        description={props.t("preserveAsciiDesc")}
      />
      <Toggle
        label={props.t("preserveLatin1")}
        checked={props.options.preserveLatin1}
        onChange={(v) => props.onOptionChange("preserveLatin1", v)}
        description={props.t("preserveLatin1Desc")}
      />
      <Toggle
        label={props.t("uppercase")}
        checked={props.options.uppercase}
        onChange={(v) => props.onOptionChange("uppercase", v)}
        description={props.t("uppercaseDesc")}
      />
    </div>
  );
};

export default OptionsPanel;
