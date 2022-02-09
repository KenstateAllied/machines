import React from "react";

function CategoryButton(props) {
  
  function onButtonClick() {
    props.updateCategory(props.category);
  }

  return(
    <button onClick={onButtonClick}>{props.category}</button>
  );
}

export default CategoryButton;