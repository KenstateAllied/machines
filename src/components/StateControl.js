import React from "react";
import NavBar from "./NavBar/NavBar";
import StoreDisplay from "./StoreDisplay/StoreDisplay";
import InventoryManagementDisplay from "./InventoryManagementDisplay/InventoryManagementDisplay";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";
import {v4} from "uuid";

class StateControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "StoreDisplay",
      currentCategory: "all",
      stock: [
        {
          id: v4(),
          name: 'Cat T-shirt',
          price: 999,     //In pennies to avoid float errors
          qty: 10,
          category: 'Clothing',
          description: 'lorem ipsum',
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
    let newStock = [...this.state.stock];
    let stockProduct = newStock.find(o => o.id === product.id);
    stockProduct = product;
    this.setState({stock: newStock});
  };

  render() {  //Add properties as needed
    let currentPage = null;
    switch (this.state.currentPage) {
      case 'StoreDisplay':
        currentPage = <StoreDisplay />
        break;
      case 'InventoryManagementDisplay':
        currentPage = <InventoryManagementDisplay />
        break;
      case 'AddProductForm':
        currentPage = <AddProductForm addProduct={this.addNewProductToStock} />
        break;
      case 'EditProductForm':
        currentPage = <EditProductForm />
        break;
      default:
        break;
    }
    return (
      <React.Fragment>
        <NavBar updateCategory={this.updateCategory} />
        {currentPage}
      </React.Fragment>
    );
  }
}

export default StateControl;