import React from "react";

function CategoryButton(props) {
  
  function onButtonClick() {
    props.updateCategory(props.category);
    props.updatePage("StoreDisplay");
  }

  const categoryButtonStyle = {
    width: '20vw'
  };

  return(
    <button onClick={onButtonClick} style={categoryButtonStyle}>{props.category}</button>
  );
}

export default CategoryButton;