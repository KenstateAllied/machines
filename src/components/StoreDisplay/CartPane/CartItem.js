import React from 'react';
import CartQtyForm from './CartQtyForm';
import RemoveCartButton from './RemoveFromCartButton';

function CartItem(props){
  const CartItemStyle = {
    backgroundColor = 'red',
    padding:'1em'
  }
  return(
    <React.Fragment>
      <div style={CartItemStyle}>
        {props.name}
        Qty: {props.qty}
        <CartQtyForm/>
        <RemoveCartButton/>
      </div>
    </React.Fragment>
  );
}

export default CartItem;