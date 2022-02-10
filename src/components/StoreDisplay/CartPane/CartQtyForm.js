import React from "react";

function CartQtyForm(props) {

  function onSubmit(event) {
    event.preventDefault();
  }

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <input type="number"/>
        <button type='submit'>Change Qty</button>
      </form>
    </React.Fragment>
  )
}

export default CartQtyForm;