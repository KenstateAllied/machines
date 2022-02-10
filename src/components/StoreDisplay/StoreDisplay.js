import React from "react";
import CartPane from "./CartPane/CartPane";
import ProductSelectPane from "./ProductSelectPane/ProductSelectPane";
import SelectProductPane from "./SelectedProductPane/SelectedProductPane";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StoreDisplay(props){
  return (
    <React.Fragment>
      <Row>
        <Col className="col-3">
          <ProductSelectPane/>
        </Col>
        <Col className="col-6">
          <SelectProductPane/>
        </Col>
        <Col className="col-3">
          <CartPane/>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default StoreDisplay;