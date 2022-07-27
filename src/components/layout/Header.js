import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

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
            <RiSunFill size={25} />
          ) : (
            <RiMoonFill size={25} />
          )}
        </button>
      </div>
    </header>
  );
}
