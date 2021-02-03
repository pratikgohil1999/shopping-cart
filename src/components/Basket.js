import React from "react";
import { ShoppingCart, Delete } from '@material-ui/icons';
import { Card } from "@material-ui/core";
import { connect } from "react-redux";
import { removeFromCart } from '../actions/cartActions';

class Basket extends React.Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <ShoppingCart
          fontSize="large"
        />
        {cartItems.length === 0 ? "Basket is Empty" :
          <Card
            style={{ margin: 'auto', width: '25rem' }}>
            You have {cartItems.length} products in Basket
              <ul>
              {cartItems.map(item =>
                <li>
                  <b>
                    {item.title}
                  </b> X {(item.count)}= ₹ {item.price * item.count}
                  <Delete
                    fontSize='medium'
                    onClick={(e) => this.props.removeFromCart(this.props.cartItems, item)}
                  />
                </li>)}
            </ul>
            Total :  ₹ {cartItems.reduce((a, c) => a + c.price * ((c.count) / 2), 0)}
          </Card>}
        <hr />
      </div >
    )
  }
}

const mapStateToProps = state => ({
  cartItems: state.cart.items
})

export default connect(mapStateToProps, { removeFromCart })(Basket);