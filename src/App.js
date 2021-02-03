import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products'
import Filter from "./components/Filter";
import Basket from "./components/Basket";
import { Navbar } from 'react-bootstrap';
import { ShoppingCart } from '@material-ui/icons';
import { Provider } from 'react-redux'
import store from "./store";

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate());
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App" >
          <Navbar className="d-flex justify-content-center">
            <Navbar.Brand>
              <h1>
                SHOPPING CART
            </h1>
            </Navbar.Brand>
            {/* <Navbar.Collapse className="d-flex justify-content-end">
              <Navbar.Text>
                <ShoppingCart
                  fontSize="large"
                />
                <b>
                   {count} 
                </b>
              </Navbar.Text>
            </Navbar.Collapse> */}
          </Navbar>
          <hr />
          <div>
            <div>
              <Filter />
              <Basket />
              <Products />
            </div>
          </div>
        </div >
      </Provider>
    );
  }

}



export default App;
