import React, { useContext } from "react";
import { ShoppingListContext } from "../../context/ShoppingListProvider";
import { ThemeContext } from "../../context/ThemeProvider";
import Li from "./Li";

export default function Lists({ setShowPage, setEditedItem, setHidden }) {
  const [shoppingList] = useContext(ShoppingListContext);
  const [theme] = useContext(ThemeContext);
  return (
    <div className="px-1">
      <section className="my-1">
        <h2 className={`subtitle-${theme} bt-${theme}`}>Pending Items</h2>
        <ul>
          {shoppingList.find((item) => item.inCart === false) === undefined ? (
            <li className={`no-items-${theme}`}>No pending items</li>
          ) : (
            shoppingList
              .filter((item) => item.inCart === false)
              .map((item) => (
                <Li
                  key={item.id}
                  currentItem={item}
                  setShowPage={setShowPage}
                  setEditedItem={setEditedItem}
                  setHidden={setHidden}
                />
              ))
          )}
        </ul>
      </section>
      <section className="my-1">
        <h2 className={`subtitle-${theme} bt-${theme}`}>In Shopping Cart</h2>
        <ul>
          {shoppingList.find((item) => item.inCart === true) === undefined ? (
            <li className={`no-items-${theme}`}>No items in shopping cart</li>
          ) : (
            shoppingList
              .filter((item) => item.inCart === true)
              .map((item) => (
                <Li
                  key={item.id}
                  currentItem={item}
                  setShowPage={setShowPage}
                  setEditedItem={setEditedItem}
                  setHidden={setHidden}
                />
              ))
          )}
        </ul>
      </section>
    </div>
  );
}
