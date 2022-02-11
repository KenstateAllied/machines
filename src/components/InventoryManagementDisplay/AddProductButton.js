import React from "react";

function AddProductButton(props){

  function onClick() {
    props.updatePage("AddProductForm");
  };

  return (
    <button onClick={onClick}>Add a Product</button>
  )
}

export default AddProductButton;