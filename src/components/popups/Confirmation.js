import React, { useContext } from "react";
import { ShoppingListContext } from "../../context/ShoppingListProvider";
import Btn from "../forms/Btn";
import "../../scss/confirm.scss";
import "../../scss/home.scss";
import { ThemeContext } from "../../context/ThemeProvider";
import ConfirmationBtns from "./ConfirmationBtns";

export default function Confirmation({
  task,
  setHidden,
  hidden,
  editedItem,
  setShowPage,
}) {
  const [theme] = useContext(ThemeContext);
  const [shoppingList] = useContext(ShoppingListContext);

  return (
    <div className={`delete-confirmation-${theme} ${hidden}`}>
      {task === "deleteAll" ? (
        <>
          {shoppingList.find((item) => item.inCart === false) === undefined &&
          shoppingList.find((item) => item.inCart === true) === undefined ? (
            <>
              <h2 className={`subtitle-${theme}`}>Your list is empty</h2>
              <p className={`text-${theme}`}>There are no items in your list</p>
              <Btn task="closeConfirm">Ok</Btn>
            </>
          ) : (
            <>
              <h2 className={`subtitle-${theme}`}>Are you sure?</h2>
              <p className={`text-${theme}`}>
                All items will be permanetly deleted from your list
              </p>
              <ConfirmationBtns task={task} setHidden={setHidden} />
            </>
          )}
        </>
      ) : (
        <>
          <h2 className={`subtitle-${theme}`}>Are you sure?</h2>
          <p className={`text-${theme}`}>
            {editedItem.amount}{" "}
            {editedItem.itemName.charAt(0).toUpperCase() +
              editedItem.itemName.slice(1)}{" "}
            will be permanetly deleted from your list
          </p>
          <ConfirmationBtns
            task={task}
            setHidden={setHidden}
            editedItem={editedItem}
            setShowPage={setShowPage}
          />
        </>
      )}
    </div>
  );
}
