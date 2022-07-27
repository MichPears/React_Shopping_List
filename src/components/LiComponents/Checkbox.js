import React, { useContext, useState } from "react";
import { ShoppingListContext } from "../../context/ShoppingListProvider";

export default function Checkbox({ currentItem }) {
  const [shoppingList, setShoppingList] = useContext(ShoppingListContext);
  const [checked, setChecked] = useState(false);

  const editList = (checkedItem) => {
    setShoppingList(
      shoppingList.map((item) => {
        if (item.id === checkedItem.id) return checkedItem;
        return item;
      })
    );
  };

  const checkItem = (item) => {
    setChecked(!checked);
    let checkedItem = {
      id: item.id,
      itemName: item.itemName,
      amount: item.amount,
      info: item.info,
      inCart: true,
    };
    editList(checkedItem);
    localStorage.setItem(
      "shoppingList",
      JSON.stringify(
        shoppingList.map((item) => {
          if (item.id === checkedItem.id) return checkedItem;
          return item;
        })
      )
    );
  };

  return (
    <input
      type="checkbox"
      className="checkbox"
      checked={checked}
      onChange={() => checkItem(currentItem)}
    />
  );
}
