import type { Component } from "solid-js";
import { useConverter } from "./hooks/useConverter";
import { useTheme } from "./hooks/useTheme";
import { useI18n } from "./hooks/useI18n";
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
  const { lang, t, toggleLang } = useI18n();

  return (
    <div class="min-h-screen p-4 sm:p-6 lg:p-8">
      <div class="max-w-6xl mx-auto">
        <Header
          theme={theme()}
          onToggleTheme={toggleTheme}
          lang={lang()}
          onToggleLang={toggleLang}
          t={t}
        />

        <main class="glass rounded-2xl p-6 space-y-6">
          {/* Mode & Format Selection */}
          <div class="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <ModeToggle mode={mode()} onModeChange={setMode} t={t} />
            <div class="flex-1">
              <p
                class="text-xs font-medium uppercase tracking-wider mb-2"
                style={{ color: "var(--text-muted)" }}
              >
                {t("outputFormat")}
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
              {t("options")}
            </p>
            <OptionsPanel
              options={options()}
              onOptionChange={updateOption}
              disabled={mode() === "decode"}
              t={t}
            />
          </div>

          {/* Text Areas */}
          <div class="grid md:grid-cols-2 gap-4 pt-4">
            <TextPanel
              label={mode() === "encode" ? t("inputText") : t("inputEscaped")}
              value={input()}
              onChange={setInput}
              placeholder={
                mode() === "encode"
                  ? t("placeholderEncode")
                  : t("placeholderDecode")
              }
              stats={inputStats()}
              t={t}
            />
            <TextPanel
              label={mode() === "encode" ? t("outputEscaped") : t("outputText")}
              value={output()}
              readonly
              placeholder={t("placeholderResult")}
              stats={outputStats()}
              t={t}
            />
          </div>

          {/* Action Buttons */}
          <div class="pt-4">
            <ActionButtons
              onSwap={swap}
              onClear={clear}
              hasInput={input().length > 0}
              t={t}
            />
          </div>
        </main>

        <Footer t={t} />
      </div>
    </div>
  );
};

export default App;
