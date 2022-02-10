import React from 'react';

function ProductSelectItem(props){
  const ProductSelectItemStyle = {
    border: '1px solid black'
  }
  return (
    <React.Fragment>
      <div style={ProductSelectItemStyle}>
        {props.image}
        <p>placeholder</p>
        {props.name}
        {props.price}
      </div>
    </React.Fragment>
  );
}

export default ProductSelectItem;