import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import Btn from "./forms/Btn";
import EditItem from "./forms/EditItem";
import Confirmation from "./popups/Confirmation";
import "../scss/show-page.scss";

export default function ShowPage({
  setShowPage,
  editedItem,
  setHidden,
  hidden,
}) {
  const [theme] = useContext(ThemeContext);
  return (
    <div className="mw-6">
      <div className="px-1">
        <h2 className={`edit-subtitle-${theme}`}>
          {editedItem.amount} {editedItem.itemName}
        </h2>
        <EditItem editedItem={editedItem} setShowPage={setShowPage} />
        <div className="bottom-btns">
          <Btn task="showConfirm" setHidden={setHidden}>
            Delete
          </Btn>
          <Btn task="leaveShowPage" setShowPage={setShowPage}>
            Cancel
          </Btn>
        </div>
      </div>
      <Confirmation
        task="deleteItem"
        setHidden={setHidden}
        hidden={hidden}
        editedItem={editedItem}
        setShowPage={setShowPage}
      />
    </div>
  );
}
