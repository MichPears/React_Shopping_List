import { useState } from "react";
import Home from "./components/Home";
import Layout from "./components/layout/Layout";
import ShowPage from "./components/ShowPage";
import ShoppingListContextProvider from "./context/ShoppingListProvider";
import ThemeContextProvider from "./context/ThemeProvider";

function App() {
  const [showPage, setShowPage] = useState(false);
  const [hidden, setHidden] = useState("hidden");
  const [editedItem, setEditedItem] = useState({});

  return (
    <ThemeContextProvider>
      <ShoppingListContextProvider>
        <Layout>
          {!showPage ? (
            <Home
              setHidden={setHidden}
              hidden={hidden}
              setShowPage={setShowPage}
              setEditedItem={setEditedItem}
            />
          ) : (
            <ShowPage
              setHidden={setHidden}
              hidden={hidden}
              setShowPage={setShowPage}
              editedItem={editedItem}
              setEditedItem={setEditedItem}
            />
          )}
        </Layout>
      </ShoppingListContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
