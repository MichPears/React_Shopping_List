import React from "react";
import AddItem from "./forms/AddItem";
import "../scss/home.scss";
import Lists from "./LiComponents/Lists";
import Btn from "./forms/Btn";
import Confirmation from "./popups/Confirmation";

export default function Home({
  setHidden,
  hidden,
  setShowPage,
  setEditedItem,
}) {
  return (
    <div className="mw-6">
      <AddItem />
      <Lists
        setShowPage={setShowPage}
        setEditedItem={setEditedItem}
        setHidden={setHidden}
      />
      <Btn position="home-center" task="showConfirm" setHidden={setHidden}>
        Delete All
      </Btn>
      <Confirmation task="deleteAll" setHidden={setHidden} hidden={hidden} />
    </div>
  );
}
