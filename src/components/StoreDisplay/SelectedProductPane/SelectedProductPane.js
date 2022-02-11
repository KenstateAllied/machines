import React from 'react';
import AddToCartForm from './AddToCartForm'

function SelectProductPane(props){

  const SelectProductPaneStyles = {
    padding: '2em',
    border: '1px solid rgb(0, 0, 0)',
    backgroundColor: '#FFD9F5'
  }

  return (
    <div style={SelectProductPaneStyles}>
      {/* {props.product.image} */}
      <div>
        <h2>{props.product.name}</h2>
        <h3>${props.product.price}</h3>  
        <p>Qty in Stock: {props.product.qty}</p>
      </div>
      <div>
        {props.product.description}
      </div>
      <AddToCartForm/>
    </div>
  );
}

export default SelectProductPane;