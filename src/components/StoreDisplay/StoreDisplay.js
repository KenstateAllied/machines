import React from "react";
import CartPane from "./CartPane/CartPane";
import ProductSelectPane from "./ProductSelectPane/ProductSelectPane";
import SelectedProductPane from "./SelectedProductPane/SelectedProductPane";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StoreDisplay(props){
  let productPane = null;
  if (props.selectedProduct === null) {
    productPane = <h2>Please select a product.</h2> 
  } else {
    productPane = <SelectedProductPane product={props.selectedProduct} />
  }

  return (
    <React.Fragment>
      <Row>
        <Col className="col-3">
          <ProductSelectPane categoryStock={props.categoryStock} 
            updateSelectedProduct={props.updateSelectedProduct} />
        </Col>
        <Col className="col-6">
          {productPane}
        </Col>
        <Col className="col-3">
          <CartPane/>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default StoreDisplay;