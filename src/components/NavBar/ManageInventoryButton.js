import React from "react";

function ManageInventoryButton(props) {

  function onClick() {
    props.updatePage("InventoryManagementDisplay");
  }

  return (
    <button onClick={onClick}>Manage Inventory</button>
  );
}

export default ManageInventoryButton;