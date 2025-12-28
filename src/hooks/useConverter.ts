import { createSignal, createMemo } from "solid-js";
import {
  escape,
  unescape,
  codePointLength,
  type EscapeFormat,
} from "unicode-escaper";

export type Mode = "encode" | "decode";

export interface ConverterOptions {
  preserveAscii: boolean;
  preserveLatin1: boolean;
  uppercase: boolean;
}

export interface ConverterState {
  input: string;
  output: string;
  mode: Mode;
  format: EscapeFormat;
  options: ConverterOptions;
  inputStats: { chars: number; codePoints: number };
  outputStats: { chars: number; codePoints: number };
}

export function useConverter() {
  const [input, setInput] = createSignal("");
  const [mode, setMode] = createSignal<Mode>("encode");
  const [format, setFormat] = createSignal<EscapeFormat>("unicode");
  const [options, setOptions] = createSignal<ConverterOptions>({
    preserveAscii: true,
    preserveLatin1: false,
    uppercase: true,
  });

  const output = createMemo(() => {
    const text = input();
    if (!text) return "";

    try {
      if (mode() === "encode") {
        return escape(text, {
          format: format(),
          preserveAscii: options().preserveAscii,
          preserveLatin1: options().preserveLatin1,
          uppercase: options().uppercase,
        });
      } else {
        return unescape(text);
      }
    } catch (error) {
      return `Error: ${error instanceof Error ? error.message : "Unknown error"}`;
    }
  });

  const inputStats = createMemo(() => ({
    chars: input().length,
    codePoints: codePointLength(input()),
  }));

  const outputStats = createMemo(() => ({
    chars: output().length,
    codePoints: codePointLength(output()),
  }));

  const swap = () => {
    const currentOutput = output();
    setInput(currentOutput);
    setMode((m) => (m === "encode" ? "decode" : "encode"));
  };

  const clear = () => {
    setInput("");
  };

  const updateOption = <K extends keyof ConverterOptions>(
    key: K,
    value: ConverterOptions[K]
  ) => {
    setOptions((prev) => ({ ...prev, [key]: value }));
  };

  return {
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
  };
}
