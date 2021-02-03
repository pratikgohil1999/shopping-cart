import React from "react";
import './Products.css';
import { Card, Button, CardColumns, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchProducts } from "../actions/productActions";

class Products extends React.Component {
  componentWillMount() {
    this.props.fetchProducts()
  }

  render() {
    const productItems = this.props.products.map(product => (
      <Card style={{ height: '40rem' }} key={product.id}>
        <a
          href={`#${product.id}`}
          onClick={(e) => this.props.handleAddToCart(e, product)}
        >
          <Card.Img
            src={`/products/${product.sku}.jpg`}
            alt={product.title} rounded
          />
          <Card.Body>
            <Card.Title>
              {product.title}
            </Card.Title>
          </Card.Body>
        </a>
        <b>
          ₹ {product.price}
        </b>
        <p>
          <Button
            variant="outline-dark"
            onClick={(e) => this.props.handleAddToCart(e, product)}>
            Add to Cart
            </Button>
        </p>
      </Card >
    )
    );
    return (
      <Row>
        <CardColumns>
          {productItems}
        </CardColumns>
      </Row>
    )
  }
}

const mapStateToProps = state => ({ products: state.products.items });

export default connect(mapStateToProps, { fetchProducts })(Products);