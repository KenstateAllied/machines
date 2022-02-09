import React from "react";
import CartPane from "./CartPane/CartPane";
import ProductSelectPane from "./ProductSelectPane/ProductSelectPane";
import SelectProductPane from "./SelectedProductPane/SelectedProductPane";

function StoreDisplay(props){
  return (
    <React.Fragment>
      <ProductSelectPane/>
      <SelectProductPane/>
      <CartPane/>
    </React.Fragment>
  );
}

export default StoreDisplay;