import React from 'react';
import InventoryItem from "./InventoryItem";
import AddProductButton from "./AddProductButton";


function InventoryManagementDisplay(props) {
  return (
    <React.Fragment>
      <InventoryItem/>
      <AddProductButton/>
    </React.Fragment>
  );
}

export default InventoryManagementDisplay;