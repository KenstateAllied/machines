import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";


function AddProductForm(props){

  function handleAddProductFormSubmission(event) {
    event.preventDefault();

    const insertDecimal = (price) => {
      return price.slice(0, price.length-2) + '.' + price.slice(price.length-2);
    };

    const product = {
      id: v4(),
      name: event.target.name.value,
      price: insertDecimal(event.target.price.value.replace('.', '')),
      qty: event.target.qty.value,
      category: event.target.category.value,
      description: event.target.description.value,
      image: null
    };

    props.addProduct(product);
    props.updatePage("InventoryManagementDisplay");
  }

  return (
    <React.Fragment>
      <form onSubmit={handleAddProductFormSubmission}>
        <input
          type="text"
          name='name'
          placeholder='Product'/>
        <input
          type='number'
          name='price'
          min='0'
          step='.01'
          placeholder='Price' />
        <input
          type='number'
          name='qty'
          min='0'
          placeholder='Quantity'/>
        <select name='category'>
          <option value='Food'>Cat Shaped Food</option> 
          <option value='Accessories'>Cat Accessories</option> 
          <option value='Clothing'>Cat Clothes</option>
          </select>
        <textarea
          name='description'
          placeholder='Product Description'/>
        {/* <input
          type='file'
          name='image'
          placeholder='Add Image' /> */}
        <button type='submit'>Add Product</button>
        </form>
        </React.Fragment>    
  );
}

export default AddProductForm;

// AddProductForm.propTypes = {

// };