import React from 'react';
import ProductSelectItem from './ProductSelectItem.js'

function ProductSelectPane(props){
  const ProductSelectPaneStyle = {
    border: '1px solid black',
    padding: '1em'
  }

  return (
    <div style={ProductSelectPaneStyle}>
      <ProductSelectItem/>
    </div>
  );
}

export default ProductSelectPane;