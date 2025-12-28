import { type Component, createSignal, Show } from "solid-js";

interface TextPanelProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
  placeholder?: string;
  stats: { chars: number; codePoints: number };
}

const TextPanel: Component<TextPanelProps> = (props) => {
  const [copied, setCopied] = createSignal(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(props.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div class="textarea-wrapper animate-fade-in">
      <span class="textarea-label">{props.label}</span>
      <textarea
        value={props.value}
        onInput={(e) => props.onChange?.(e.currentTarget.value)}
        readonly={props.readonly}
        placeholder={props.placeholder}
        class={props.readonly ? "cursor-default" : ""}
        spellcheck={false}
      />
      <div class="stats-bar justify-between">
        <div class="flex gap-4">
          <span>
            <strong>{props.stats.chars}</strong> chars
          </span>
          <span
            title="Actual Unicode characters. Emoji count as 1 code point but 2 chars in JavaScript."
            class="cursor-help border-b border-dotted border-current"
          >
            <strong>{props.stats.codePoints}</strong> code points
          </span>
        </div>
        <button
          onClick={handleCopy}
          class={`btn btn-secondary text-xs flex items-center gap-1.5 ${copied() ? "copied-feedback" : ""}`}
          disabled={!props.value}
        >
          <Show
            when={copied()}
            fallback={
              <>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                Copy
              </>
            }
          >
            <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span class="text-green-500">Copied!</span>
          </Show>
        </button>
      </div>
    </div>
  );
};

export default TextPanel;
