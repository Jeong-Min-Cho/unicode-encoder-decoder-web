import type { Component } from "solid-js";
import type { TranslationKey } from "../hooks/useI18n";

interface ActionButtonsProps {
  onSwap: () => void;
  onClear: () => void;
  hasInput: boolean;
  t: (key: TranslationKey) => string;
}

const ActionButtons: Component<ActionButtonsProps> = (props) => {
  return (
    <div class="flex items-center justify-center gap-3">
      <button
        onClick={props.onSwap}
        class="btn btn-secondary flex items-center gap-2"
        disabled={!props.hasInput}
        title={props.t("swap")}
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
          />
        </svg>
        <span class="hidden sm:inline">{props.t("swap")}</span>
      </button>
      <button
        onClick={props.onClear}
        class="btn btn-secondary flex items-center gap-2"
        disabled={!props.hasInput}
        title={props.t("clear")}
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
        <span class="hidden sm:inline">{props.t("clear")}</span>
      </button>
    </div>
  );
};

export default ActionButtons;
