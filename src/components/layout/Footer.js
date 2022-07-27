import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

export default function Footer() {
  const [theme] = useContext(ThemeContext);
  return <footer className={`footer-${theme}`}>© Zuli 2022</footer>;
}
