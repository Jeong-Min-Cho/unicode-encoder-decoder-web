import { createSignal, createEffect, onMount } from "solid-js";

export type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = createSignal<Theme>("light");

  onMount(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = stored || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
  });

  createEffect(() => {
    const currentTheme = theme();
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
    localStorage.setItem("theme", currentTheme);
  });

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
