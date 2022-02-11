import React from 'react';

function ProductStockQtyForm() {
  return (
    <React.Fragment>
      <form onSubmit={null}>
        <input
          type='number'
          name='qty'
          min='0'
          placeholder='Qty'/>
        <button type='submit'>Add Stock</button>
      </form>
    </React.Fragment>
  );
}

export default ProductStockQtyForm;