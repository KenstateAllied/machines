import React from 'react';
import ProductSelectItem from './ProductSelectItem.js'

function ProductSelectPane(props){
  const ProductSelectPaneStyle = {
    border: '1px solid #C0FDFF',
    padding: '1em',
    backgroundColor: '#C0FDFF'
  }

  return (
    <React.Fragment>
      <div style={ProductSelectPaneStyle}>
        {props.categoryStock.map(product => 
          <ProductSelectItem product={product} 
            updateSelectedProduct={props.updateSelectedProduct}/>
        )}
      </div>
    </React.Fragment>
  );
}

export default ProductSelectPane;