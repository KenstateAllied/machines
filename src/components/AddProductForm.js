import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";


function AddProductForm(props){

  function handleAddProductFormSubmission(event) {
    event.preventDefault();
    
    const inputs = event.target;
    const product = {
      id: v4(),
      name: inputs.name.value,
      price: inputs.price.value.replace('.', ''),
      qty: inputs.qty.value,
      category: inputs.category.value,
      description: inputs.category.value,
      image: null
    };

    props.AddProduct(product);
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
          placeholder='Price' />
        <input
          type='text'
          name='qty'
          placeholder='Quantity'/>
        <select>
          <option value='Food'>Cat Shaped Food</option> 
          <option value='Accessories'>Cat Bling</option> 
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