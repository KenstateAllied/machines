import React from 'react';

function AddToCartForm(props){
  return (
    <React.Fragment>
      <form onSubmit={null}>
        <input
        type='number'
        name='qty'
        min='1'
        placeholder='Qty'/>
        <button>Add to Cart</button>
      </form>
    </React.Fragment>
  )
}

export default AddToCartForm;