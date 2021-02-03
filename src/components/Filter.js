import React from 'react';
import { connect } from 'react-redux';
import { filterProducts, sortProducts } from "../actions/productActions";

class Filter extends React.Component {
    render() {
        return (
            <div className  >
                <div className="col=md-4">
                    <b>{this.props.filteredProducts.length}</b> products found
                </div>
                <div className="col=md-4">
                    <label>
                        Order by
                    <select className='form-control' value={this.props.sort}
                            onChange={(e) => this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
                            <option value="">Select</option>
                            <option value="lowest">Lowest To Highest</option>
                            <option value="highest">Highest To Lowest</option>
                        </select>
                    </label>
                </div>
                <div className="col=md-4">
                    <label>
                        Filter Size
                        <select className='form-control' value={this.props.size}
                            onChange={(e) => this.props.filterProducts(this.props.products, e.target.value)}>
                            <option value="">ALL</option>
                            <option value="x">XS</option>
                            <option value="s">S</option>
                            <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option>
                        </select>
                    </label>
                </div>
                <div className="col=md-4"></div>
            </div >
        )
    }
}

const mapStateToProps = state => ({
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
    size: state.products.size,
    sort: state.products.sort
})

export default connect(mapStateToProps, { filterProducts, sortProducts })(Filter);