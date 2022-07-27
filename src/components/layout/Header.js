import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

export default function Header() {
  const [theme, setTheme] = useContext(ThemeContext);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <header className={`header-container-${theme}`}>
      <div className="header mw-6">
        <h1 className={`logo-${theme}`}>Shopping List</h1>
        <button
          className={`day-night-btn-${theme}`}
          onClick={() => {
            toggleTheme();
          }}
        >
          {theme === "dark" ? (
            <span className="material-symbols-outlined"> light_mode </span>
          ) : (
            <span className="material-symbols-outlined"> dark_mode </span>
          )}
        </button>
      </div>
    </header>
  );
}
