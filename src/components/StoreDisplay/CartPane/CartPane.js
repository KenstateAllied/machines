import React from "react";
import CartItem from "./CartItem";
import CheckoutButton from "./CheckoutButton";

function CartPane(props) {
  const CartPaneStyle = {
    border: '1px solid orange',
    padding: '1em',
    backgroundColor: '#E3F6FF'
  }
  return (
    <React.Fragment>
      <div style={CartPaneStyle}>
        <CartItem/>
        <h3>Total:</h3>
        <CheckoutButton/>
      </div>
    </React.Fragment>
  );
}

export default CartPane;