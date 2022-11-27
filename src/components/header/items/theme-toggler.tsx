"use client";

import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import useToggleTheme from "@hooks/toggle-theme";

export default function ThemeToggler() {
  const { theme, setTheme } = useToggleTheme();

  console.log(theme)

  if (theme === "light") {
    return (
      <ThemeTogglerItem onClick={() => setTheme("dark")} Icon={MoonIcon} />
    );
  }

  if (theme === "dark") {
    return (
      <ThemeTogglerItem
        Icon={ComputerDesktopIcon}
        onClick={() => setTheme("system")}
      />
    );
  }

  return <ThemeTogglerItem onClick={() => setTheme("light")} Icon={SunIcon} />;
}

interface ThemeTogglerItemProps {
  onClick: () => void;
  Icon: React.FunctionComponent<any>;
}

function ThemeTogglerItem({ onClick, Icon }: ThemeTogglerItemProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-10 h-10 transition border rounded-xl border-zinc-300 dark:border-zinc-600 hover:shadow dark:hover:shadow active:scale-105"
    >
      <Icon className="w-6 h-6 mt-0.5 text-zinc-500 dark:text-zinc-400" />
    </button>
  );
}
