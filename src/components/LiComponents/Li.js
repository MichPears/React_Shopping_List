import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeProvider";
import Checkbox from "./Checkbox";

export default function Li({
  currentItem,
  setShowPage,
  setEditedItem,
  setHidden,
}) {
  const [theme] = useContext(ThemeContext);

  //MIGHT HAVE TO SET HIDDEN HERE IN CASE IT STILL SHOWS IN SHOW PAGE//
  const toShowPage = () => {
    setEditedItem(currentItem);
    setShowPage(true);
    setHidden("hidden");
  };
  return (
    <li className="li">
      {!currentItem.inCart && <Checkbox currentItem={currentItem} />}
      <span className={`text-${theme} link`} onClick={() => toShowPage()}>
        {currentItem.amount} {currentItem.itemName}
      </span>
    </li>
  );
}
