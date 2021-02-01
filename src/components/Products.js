import React from "react";

export default class Products extends React.Component {
    render() {
        const productItems = this.props.products.map(product => (
            <div>
                <div>
                    <a href={`#${product.id}`} onClick={(e) => this.props.handleAddToCart(e, product)}>
                        <img src={`/products/${product.sku}.jpg`} alt={product.title} />
                        <p>
                            {product.title}
                        </p>
                    </a>
                    <div>
                        <b>
                            {product.price}
                        </b>
                        <button onClick={(e) => this.props.handleAddToCart(e, product)}>Add to Cart</button>
                    </div>
                </div>
            </div>
        )
        )
        return (
            <div>
                { productItems}
            </div >
        )
    }
}