import React, { createContext, useState } from "react";

export const ShoppingListContext = createContext();

export default function ShoppingListProvider({ children }) {
  const [shoppingList, setShoppingList] = useState(
    JSON.parse(localStorage.getItem("shoppingList")) || []
  );
  return (
    <ShoppingListContext.Provider value={[shoppingList, setShoppingList]}>
      {children}
    </ShoppingListContext.Provider>
  );
}
