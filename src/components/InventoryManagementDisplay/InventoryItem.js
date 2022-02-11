import React from 'react';
import ProductStockQtyForm from './ProductStockQtyForm';
import EditProductButton from './EditProductButton';
import DeleteProductButton from './DeleteProductButton';

function InventoryItem(props) {
  const InventoryItemStyle = {
    border: '1px solid black',
    padding: '1em'
  }

  return (
    <React.Fragment>
      <div style={InventoryItemStyle}>
        <h2>{props.product.name}</h2>
        <h3>${props.product.price}</h3>  
        <p>Qty in Stock: {props.product.qty}</p>
        <div>
          {props.product.description}
        </div>
        <ProductStockQtyForm />
        <EditProductButton />
        <DeleteProductButton />
      </div>
    </React.Fragment>
  );
}

export default InventoryItem;