import type { Component } from "solid-js";
import { useConverter } from "./hooks/useConverter";
import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import ModeToggle from "./components/ModeToggle";
import FormatSelector from "./components/FormatSelector";
import OptionsPanel from "./components/OptionsPanel";
import TextPanel from "./components/TextPanel";
import ActionButtons from "./components/ActionButtons";
import Footer from "./components/Footer";

const App: Component = () => {
  const {
    input,
    setInput,
    output,
    mode,
    setMode,
    format,
    setFormat,
    options,
    updateOption,
    inputStats,
    outputStats,
    swap,
    clear,
  } = useConverter();

  const { theme, toggleTheme } = useTheme();

  return (
    <div class="min-h-screen p-4 sm:p-6 lg:p-8">
      <div class="max-w-6xl mx-auto">
        <Header theme={theme()} onToggleTheme={toggleTheme} />

        <main class="glass rounded-2xl p-6 space-y-6">
          {/* Mode & Format Selection */}
          <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <ModeToggle mode={mode()} onModeChange={setMode} />
            <div class="flex-1">
              <p
                class="text-xs font-medium uppercase tracking-wider mb-2"
                style={{ color: "var(--text-muted)" }}
              >
                Output Format
              </p>
              <FormatSelector
                format={format()}
                onFormatChange={setFormat}
                disabled={mode() === "decode"}
              />
            </div>
          </div>

          {/* Options */}
          <div
            class="pt-4 border-t"
            style={{ "border-color": "var(--border-color)" }}
          >
            <p
              class="text-xs font-medium uppercase tracking-wider mb-3"
              style={{ color: "var(--text-muted)" }}
            >
              Options
            </p>
            <OptionsPanel
              options={options()}
              onOptionChange={updateOption}
              disabled={mode() === "decode"}
            />
          </div>

          {/* Text Areas */}
          <div class="grid md:grid-cols-2 gap-4 pt-4">
            <TextPanel
              label={mode() === "encode" ? "Input (Text)" : "Input (Escaped)"}
              value={input()}
              onChange={setInput}
              placeholder={
                mode() === "encode"
                  ? "Enter text to encode... e.g., Hello 안녕 😀"
                  : "Enter escaped text... e.g., \\uC548\\uB155"
              }
              stats={inputStats()}
            />
            <TextPanel
              label={mode() === "encode" ? "Output (Escaped)" : "Output (Text)"}
              value={output()}
              readonly
              placeholder="Result will appear here..."
              stats={outputStats()}
            />
          </div>

          {/* Action Buttons */}
          <div class="pt-4">
            <ActionButtons
              onSwap={swap}
              onClear={clear}
              hasInput={input().length > 0}
            />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
