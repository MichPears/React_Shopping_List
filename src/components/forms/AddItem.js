import React, { useContext, useState } from "react";
import { ShoppingListContext } from "../../context/ShoppingListProvider";
import { ThemeContext } from "../../context/ThemeProvider";
import "../../scss/forms.scss";

export default function AddItem() {
  const [shoppingList, setShoppingList] = useContext(ShoppingListContext);
  const [theme] = useContext(ThemeContext);

  const [newItemName, setNewItemName] = useState("");
  const [newItemAmount, setNewItemAmount] = useState("");

  const submitNew = (e) => {
    e.preventDefault();
    setNewItemAmount("");
    setNewItemName("");
    setShoppingList([
      {
        id: shoppingList[0] === undefined ? 0 : shoppingList[0].id + 1,
        itemName: newItemName,
        amount: newItemAmount,
        info: "",
        inCart: false,
      },
      ...shoppingList,
    ]);
    localStorage.setItem(
      "shoppingList",
      JSON.stringify([
        {
          id: shoppingList[0] === undefined ? 0 : shoppingList[0].id + 1,
          itemName: newItemName,
          amount: newItemAmount,
          info: "",
          inCart: false,
        },
        ...shoppingList,
      ])
    );
  };

  return (
    <div className="form-container">
      <form className="shopping-form" onSubmit={(e) => submitNew(e)}>
        <label htmlFor="new-item-input" className={`label-${theme}`}>
          Add New:
        </label>
        <div className="input-container">
          <input
            type="number"
            min="1"
            className={`text-input-${theme} amount-input`}
            placeholder="#"
            value={newItemAmount}
            onChange={(e) => setNewItemAmount(e.target.value)}
          />
          <input
            type="text"
            name="new-item-input"
            className={`text-input-${theme} new-item-input`}
            placeholder="I need to buy..."
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
        </div>
        <input type="submit" className={`btn-${theme}`} value="Add" />
      </form>
    </div>
  );
}
