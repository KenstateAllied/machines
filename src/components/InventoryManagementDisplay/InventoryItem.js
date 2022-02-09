import React from 'react';
import ProductStockQtyForm from './ProductStockQtyForm';
import EditProductButton from './EditProductButton';
import DeleteProductButton from './DeleteProductButton';

function InventoryItem() {
  return (
    <React.Fragment>
      <ProductStockQtyForm />
      <EditProductButton />
      <DeleteProductButton />
    </React.Fragment>
  );
}

export default InventoryItem;