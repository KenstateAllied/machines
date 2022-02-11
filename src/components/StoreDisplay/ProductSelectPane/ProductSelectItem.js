import React from 'react';

function ProductSelectItem(props){
  const ProductSelectItemStyle = {
    border: '1px solid black'
  }

  const onClick = () => {
    props.updateSelectedProduct(props.product);
  };

  return (
    <React.Fragment>
      <button onClick={onClick} style={ProductSelectItemStyle}>
        {/* {props.product.image} */}
        <h3>{props.product.name}</h3>
        <h4>{props.product.price}</h4>
      </button>
    </React.Fragment>
  );
}

export default ProductSelectItem;