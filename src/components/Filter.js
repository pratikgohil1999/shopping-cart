import React from 'react';

export default class Filter extends React.Component {
    render() {
        return (
            <div className  >
                <div className="col=md-4">
                    <b>{this.props.count}</b> products found
                </div>
                <div className="col=md-4">
                    <label>
                        Order by
                    <select className='form-control' value={this.props.sort}
                            onChange={this.props.handleChangeSort}>
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
                            onChange={this.props.handleChangeSize}>
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