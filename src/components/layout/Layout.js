import React, { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import "../../scss/layout.scss";
import { ThemeContext } from "../../context/ThemeProvider";

export default function Layout({ children }) {
  const [theme] = useContext(ThemeContext);

  if (theme === "dark") document.body.style.backgroundColor = "rgb(23, 16, 41)";
  if (theme === "light")
    document.body.style.backgroundColor = "rgb(255, 243, 228)";

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
