import React, { useContext, useState } from "react";
import { ShoppingListContext } from "../../context/ShoppingListProvider";
import { ThemeContext } from "../../context/ThemeProvider";
import "../../scss/forms.scss";

export default function EditItem({ editedItem, setShowPage }) {
  const [theme] = useContext(ThemeContext);
  const [shoppingList, setShoppingList] = useContext(ShoppingListContext);
  const [editedAmount, setEditedAmount] = useState(editedItem.amount);
  const [editedName, setEditedName] = useState(editedItem.itemName);
  const [editedInfo, setEditedInfo] = useState(editedItem.info);

  const saveEdit = (e) => {
    e.preventDefault();
    setShoppingList(
      shoppingList.map((item) => {
        if (item.id === editedItem.id)
          return {
            id: item.id,
            itemName: editedName,
            amount: editedAmount,
            info: editedInfo,
            inCart: item.inCart,
          };
        return item;
      })
    );
    localStorage.setItem(
      "shoppingList",
      JSON.stringify(
        shoppingList.map((item) => {
          if (item.id === editedItem.id)
            return {
              id: item.id,
              itemName: editedName,
              amount: editedAmount,
              info: editedInfo,
              inCart: item.inCart,
            };
          return item;
        })
      )
    );
    setShowPage(false);
  };

  return (
    <form className="edit-form" onSubmit={(e) => saveEdit(e)}>
      <label htmlFor="item-edit" className={`label-${theme}`}>
        Edit Item:
      </label>
      <div className="input-container">
        <input
          type="number"
          min="1"
          className={`text-input-${theme} amount-input`}
          placeholder="#"
          value={editedAmount}
          onChange={(e) => setEditedAmount(e.target.value)}
        />
        <input
          type="text"
          name="edit-item-input"
          className={`text-input-${theme}`}
          placeholder="I need to buy..."
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
      </div>
      <div className="input-save-container">
        <textarea
          name="item-edit"
          className={`info-input-${theme}`}
          placeholder="Item Info"
          value={editedInfo}
          onChange={(e) => setEditedInfo(e.target.value)}
        ></textarea>
        <input type="submit" className={`mx-1 btn-${theme}`} value="Save" />
      </div>
    </form>
  );
}
