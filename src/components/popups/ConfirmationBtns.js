import React, { useContext } from "react";
import { ShoppingListContext } from "../../context/ShoppingListProvider";
import { ThemeContext } from "../../context/ThemeProvider";

export default function ConfirmationBtns({
  task,
  setHidden,
  editedItem,
  setShowPage,
}) {
  const [theme] = useContext(ThemeContext);
  const [shoppingList, setShoppingList] = useContext(ShoppingListContext);

  const taskChecker = () => {
    if (task === "deleteAll") {
      localStorage.removeItem("shoppingList");
      setShoppingList([]);
    }
    if (task === "deleteItem") {
      setShoppingList(shoppingList.filter((item) => item.id !== editedItem.id));
      localStorage.setItem(
        "shoppingList",
        JSON.stringify(shoppingList.filter((item) => item.id !== editedItem.id))
      );
      setShowPage(false);
    }
    setHidden("hidden");
  };

  return (
    <div className="btn-container">
      <button
        className="delete-btn"
        onClick={() => {
          taskChecker();
        }}
      >
        <span className={`material-symbols-outlined delete-icon-${theme}`}>
          check
        </span>
      </button>
      <button
        className="cancel-confirm-btn"
        onClick={() => {
          setHidden("hidden");
        }}
      >
        <span className={`material-symbols-outlined cancel-icon-${theme}`}>
          close
        </span>
      </button>
    </div>
  );
}
