import React from "react";
import NavBar from "./NavBar/NavBar";
import StoreDisplay from "./StoreDisplay/StoreDisplay";
import InventoryManagementDisplay from "./InventoryManagementDisplay/InventoryManagementDisplay";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";
import {v4} from "uuid";
import Container from 'react-bootstrap/Container';

class StateControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "StoreDisplay",
      currentCategory: "All",
      currentProduct: null,
      stock: [
        {
          id: v4(),
          name: 'Cat T-shirt',
          price: 9.99,     //In pennies to avoid float errors
          qty: 10,
          category: 'Clothing',
          description: 'A sweet cat t-shirt. Meow, baby!',
          image: null     //image object reference
        },
        {
          id: v4(),
          name: 'Cat Mug',
          price: 7.99,     //In pennies to avoid float errors
          qty: 10,
          category: 'Accessories',
          description: 'You can use this cute cat-shaped mug to drink milk, or catnip tea. Or whatever.',
          image: null     //image object reference
        },
        {
          id: v4(),
          name: 'Cat Gruel',
          price: 14.99,     //In pennies to avoid float errors
          qty: 20,
          category: 'Food',
          description: 'No cats were harmed in the making of this gruel. #crueltyfreegruel',
          image: null     //image object reference
        }
      ],
      cart: []
    };
  }

  updateCurrentPage = (page) => {
    this.setState({currentPage: page});
  };

  updateCategory = (category) => {
    this.setState({currentCategory: category});
  };
  
  updateCurrentProduct = (product) => {
    this.setState({currentProduct: product});
  };

  // functions to update stock / cart
  moveStockToCart = (product, qty) => {
    let newStock = [...this.state.stock];
    let stockProduct = newStock.find(o => o.id === product.id);
    let newCart = [...this.state.stock];
    let cartProduct = newCart.find(o => o.id === product.id);
    
    if (stockProduct.qty >= qty) {
        stockProduct.qty -= qty;
      (cartProduct != null) ? 
        cartProduct.qty += qty :
        newCart.push({...stockProduct, qty: qty});
    } else if (stockProduct.qty < qty) {
        stockProduct = 0;
      (cartProduct != null) ? 
        cartProduct.qty += stockProduct.qty :
        newCart.push({...stockProduct, qty: stockProduct.qty});
    }
    this.setState({stock: newStock}, {cart: newCart});
  };

  moveCartToStock = (product, qty) => {
    let newCart = [...this.state.stock];
    let cartProduct = newCart.find(o => o.id === product.id);
    let newStock = [...this.state.stock];
    let stockProduct = newStock.find(o => o.id === product.id);
    
    if (cartProduct.qty >= qty) {
        cartProduct.qty -= qty;
        stockProduct.qty += qty;
    } else if (cartProduct.qty < qty) {
        cartProduct.qty = 0;
        stockProduct.qty += cartProduct.qty;
    }
    this.setState({stock: newStock}, {cart: newCart});
  }

  addNewProductToStock = (product) => {
    let newStock = [...this.state.stock];
    product.id = v4();
    newStock.push(product);
    this.setState({stock: newStock});
  };

  editProduct = (product) => {
    let newStock = this.state.stock
      .filter(p => p.id !== product.id)
      .concat(product);
    this.setState({stock: newStock});
  };

  render() {  //Add properties as needed
    let currentPage = null;
    let categoryStock = null;
    
    if (this.state.currentCategory === "All") {
      categoryStock = this.state.stock;
    } else {
      categoryStock = this.state.stock.filter(p => p.category === this.state.currentCategory);
    }

    switch (this.state.currentPage) {
      case 'StoreDisplay':
        currentPage = <StoreDisplay categoryStock={categoryStock} 
          cart={this.state.cart} 
          selectedProduct={this.state.currentProduct}
          updateSelectedProduct={this.updateCurrentProduct} />
        break;
      case 'InventoryManagementDisplay':
        currentPage = <InventoryManagementDisplay stock={this.state.stock} 
          updatePage={this.updateCurrentPage} />
        break;
      case 'AddProductForm':
        currentPage = <AddProductForm addProduct={this.addNewProductToStock} 
        updatePage={this.updateCurrentPage} />
        break;
      case 'EditProductForm':
        currentPage = <EditProductForm stock={this.state.stock} />
        break;
      default:
        break;
    }
    return (
      <React.Fragment>
        <Container>
          <NavBar updateCategory={this.updateCategory} 
            updatePage = {this.updateCurrentPage} />
          {currentPage}
        </Container>
      </React.Fragment>
    );
  }
}

export default StateControl;