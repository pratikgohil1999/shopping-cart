import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { products: [], filteredProducts: [] }
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

  render() {
    return (
      <div className="App" >
        <h1>Shoping Cart</h1>
        <hr />
        <div>
          <div>
            <Products products={this.state.filteredProducts} handleAddToCart={this.handleAddToCart} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
