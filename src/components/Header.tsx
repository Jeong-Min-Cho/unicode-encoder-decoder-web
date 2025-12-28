import type { Component } from "solid-js";
import type { Theme } from "../hooks/useTheme";

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

const Header: Component<HeaderProps> = (props) => {
  return (
    <header class="glass rounded-2xl px-6 py-4 mb-6 flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
          <svg
            class="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </div>
        <div>
          <h1 class="text-xl font-bold">Unicode Encoder/Decoder</h1>
          <p class="text-sm" style={{ color: "var(--text-muted)" }}>
            Powered by{" "}
            <a
              href="https://www.npmjs.com/package/unicode-escaper"
              target="_blank"
              rel="noopener noreferrer"
              class="text-primary-500 hover:text-primary-600 transition-colors"
            >
              unicode-escaper
            </a>
          </p>
        </div>
      </div>

      <button
        onClick={props.onToggleTheme}
        class="btn btn-secondary flex items-center gap-2"
        aria-label={`Switch to ${props.theme === "light" ? "dark" : "light"} mode`}
      >
        {props.theme === "light" ? (
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        ) : (
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        )}
        <span class="hidden sm:inline">{props.theme === "light" ? "Dark" : "Light"}</span>
      </button>
    </header>
  );
};

export default Header;
