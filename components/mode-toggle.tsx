"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";


export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  if (!mounted) {
    return <div className="h-8 w-16 rounded-full bg-white/20" />;
  }

  const isLight = theme === "light";

  return (
    <button
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white font-medium text-sm"
      aria-label={`Switch to ${isLight ? "dark" : "light"} theme`}
    >
      {isLight ? (
        <>
          <Sun size={16} />
          <span>Light</span>
        </>
      ) : (
        <>
          <Moon size={16} />
          <span>Dark</span>
        </>
      )}
    </button>
  );
}
