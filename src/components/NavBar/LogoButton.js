import React from "react";
import Logo from "../../img/cat-merch-logo-bc.png"

function LogoButton(props) {

  function onButtonClick(){
    props.updateCategory("All");
  }

  const buttonStyles = {
    backgroundImage: 'url('+ Logo + ')',
    backgroundSize: "cover",
    height: "6em",
    width: "6em"
  }

  return(
    <button style={buttonStyles} onClick={onButtonClick}></button>
  );
}

export default LogoButton;