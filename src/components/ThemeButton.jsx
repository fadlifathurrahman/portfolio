import { useContext, useEffect } from "react";
import { ThemeContext } from "../App";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ThemeButton() {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    theme === "dark" ? console.log("Dark mode") : console.log("Bright mode");
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={
        theme === "dark"
          ? "bg-slate-700 rounded-full"
          : "bg-slate-700 rounded-full"
      }
    >
      <div className="flex flex-row gap-2 pl-6 items-center py-0 text-xs">
        Mode:
        <div className="bg-slate-500 rounded-full p-2 -mr-2">
          {theme === "dark" ? (
            <MdLightMode size="16px" />
          ) : (
            <MdDarkMode size="16px" />
          )}
        </div>
      </div>
    </button>
  );
}
