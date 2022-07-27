import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";

export default function Btn({
  children,
  position,
  task,
  setHidden,
  setShowPage,
}) {
  const [theme] = useContext(ThemeContext);

  const showConfirm = () => setHidden("");

  const closeConfirm = () => setHidden("hidden");

  const checkTask = () => {
    if (task === "showConfirm") showConfirm();
    if (task === "closeConfirm") closeConfirm();
    if (task === "leaveShowPage") setShowPage(false);
  };

  return (
    <button className={`btn-${theme} ${position}`} onClick={() => checkTask()}>
      {children}
    </button>
  );
}
