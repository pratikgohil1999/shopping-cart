import React from "react";
import { ShoppingCart, Delete } from '@material-ui/icons';
import { Card } from "@material-ui/core";

export default class Basket extends React.Component {
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
                  </b> X {((item.count) / 2)}= ₹ {item.price * ((item.count) / 2)}
                  <Delete
                    fontSize='medium'
                    onClick={(e) => this.props.handleRemoveFromCart(e, item)}
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