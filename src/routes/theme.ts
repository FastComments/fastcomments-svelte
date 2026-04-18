import { writable } from "svelte/store";
import { browser } from "$app/environment";

export type Theme = "light" | "dark";

const STORAGE_KEY = "fc-showcase-theme";

function detectInitial(): Theme {
  if (!browser) return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export const theme = writable<Theme>(detectInitial());

if (browser) {
  theme.subscribe((value) => {
    document.documentElement.dataset.fcTheme = value;
    window.localStorage.setItem(STORAGE_KEY, value);
  });

  const mq = window.matchMedia?.("(prefers-color-scheme: dark)");
  mq?.addEventListener?.("change", (e) => {
    if (!window.localStorage.getItem(STORAGE_KEY + ":user-set")) {
      theme.set(e.matches ? "dark" : "light");
    }
  });
}

export function setTheme(next: Theme) {
  if (browser) window.localStorage.setItem(STORAGE_KEY + ":user-set", "1");
  theme.set(next);
}
