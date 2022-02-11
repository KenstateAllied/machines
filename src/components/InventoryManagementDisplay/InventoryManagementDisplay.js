import React from 'react';
import InventoryItem from "./InventoryItem";
import AddProductButton from "./AddProductButton";
import {v4}from "uuid";


function InventoryManagementDisplay(props) {
  const InventoryManagementDisplayStyle = {
    border: '1px solid black',
    padding: '1em'
  }
  return (
    <React.Fragment>
      <div style={InventoryManagementDisplayStyle}>
        {props.stock.map(product => 
          <InventoryItem product={product}
          key={v4()} />
        )}
      </div>
      <AddProductButton updatePage={props.updatePage}/>
    </React.Fragment>
  );
}

export default InventoryManagementDisplay;