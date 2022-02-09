import React from 'react';
import AddToCartForm from './AddToCartForm'

function SelectProductPane(props){

  const SelectProductPaneStyles = {
    padding: '2em',
    border: '1px solid rgb(0, 0, 0)'
  }
  return (
    <div style={SelectProductPaneStyles}>
      {props.image}
      <div>
        <h2>{props.name}</h2>
        <h3>${props.price}</h3>  
        <p>Qty in Stock: {props.qty}</p>
      </div>
      <div>
        {props.description}
      </div>
      <AddToCartForm/>
    </div>
  );
}

export default SelectProductPane;