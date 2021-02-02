import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products'
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import { Navbar } from 'react-bootstrap';
import { ShoppingCart } from '@material-ui/icons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      filteredProducts: [],
      cartItems: [],
      size: '',
    }
    this.handleChangeSort = this.handleChangeSort.bind(this);
    this.handleChangeSize = this.handleChangeSize.bind(this);
    this.handleAddToCart = this.handleAddToCart.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  componentWillMount() {
    fetch("./db.json").then(res => {
      console.log('res:----', res);
      return res.json()
    })
      .then(data => {
        console.log("DAta: ", data);
        this.setState({
          products: data.products,
          filteredProducts: data.products
        })
      })
      .catch(e => console.log("error: ", e))
  }

  handleChangeSort(e) {
    this.setState({ sort: e.target.value });
    this.listProducts();
  }

  handleChangeSize(e) {
    this.setState({ size: e.target.value });
    this.listProducts();
  }


  handleAddToCart(e, product) {
    this.setState(state => {
      const cartItems = state.cartItems;
      let productAlreadyInCart = false;
      cartItems.forEach((item) => {
        if (item.id === product.id) {
          productAlreadyInCart = true;
          console.log('item here:', item.id, item.count);
          item.count++;
        }
      });
      if (!productAlreadyInCart) {
        cartItems.push({ ...product, count: 1 });
      }
      console.log("leeeeeeeeeeeeeeeee:", cartItems);
      localStorage.setItem("currentItems", JSON.stringify(cartItems));
      return cartItems;
    })
  }

  handleRemoveFromCart(e, item) {
    this.setState(state => {
      const cartItems = state.cartItems.filter(el => el.id !== item.id);
      localStorage.setItem('cartItems', cartItems);
      return { cartItems };
    });
  }

  listProducts() {
    this.setState(state => {
      if (state.sort !== '') {
        state.products.sort((a, b) =>
          (state.sort === "lowest") ?
            (a.price > b.price ? 1 : -1) : (a.price < b.price ? 1 : -1))
      }
      else {
        state.products.sort((a, b) => (a.id > b.id ? 1 : -1));
      }
      if (state.size !== '') {
        return {
          filteredProducts: state.products.filter(a =>
            a.availableSizes.indexOf(state.size.toUpperCase()) >= 0
          )
        }
      }
      return { filteredProducts: state.products };
    })
  }

  render() {
    let count = 0;
    this.state.cartItems.map(item => {
      return count = count + ((item.count / 2));
    });
    return (
      <div className="App" >
        <Navbar>
          <Navbar.Brand>
            <h1>
              SHOPPING CART
            </h1>
          </Navbar.Brand>
          <Navbar.Collapse className="d-flex justify-content-end">
            <Navbar.Text>
              <ShoppingCart
                fontSize="large"
              />
              <b>
                {count}
              </b>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
        <hr />
        <div>
          <div>
            <Filter size={this.state.size}
              sort={this.state.sort}
              handleChangeSize={this.handleChangeSize}
              handleChangeSort={this.handleChangeSort}
              count={this.state.filteredProducts.length}
            />
            <Basket
              cartItems={this.state.cartItems}
              handleRemoveFromCart={this.handleRemoveFromCart}
            />
            <Products
              products={this.state.filteredProducts}
              handleAddToCart={this.handleAddToCart}
            />
          </div>
        </div>
      </div >
    );
  }

}

export default App;
