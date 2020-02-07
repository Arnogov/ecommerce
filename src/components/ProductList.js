import React, {Component} from 'react';
import Product from "./Product";
import "./ProductList.scss";

class ProductList extends Component {

    constructor(props) {
        super(props);
        const max = this.props.products.reduce((highest, p) => (highest > p.price) ? highest : p.price, 0);
        this.state = {min: 0, max: max, minValue: 0, maxValue: max};
    }

    handleChange(event) {
        const {name, value} = event.target;

        let newState = { [name]: value};

        if (name === 'minValue' && parseFloat(this.state.maxValue) < parseFloat(value)){
            newState.maxValue = value;
        }else if (name === 'maxValue' && parseFloat(this.state.minValue) < parseFloat(value)){
            newState.minValue = value;
        }

        this.setState(newState);
    }

    render() {

        const {min, max, minValue, maxValue} = this.state;
        const products = this.props.products.filter(p => p.price >= minValue && p.price <= maxValue).map((product, key) =>
            <li key={key}><Product product={product} addToCart={p => this.props.addToCart(p)}/></li>);

        return (
            <React.Fragment>
                <div className="filters">
                    <div>
                        <div>
                            <label>Min : {Math.round(minValue)}</label>
                        </div>
                        {min}
                        <input
                            type="range"
                            name="minValue"
                            min={min}
                            max={max}
                            step={max / 100}
                            value={minValue}
                            onChange={event => this.handleChange(event)}
                        />
                        {max}
                    </div>
                    <div>
                        <div>
                            <label>Max : {Math.round(maxValue)}</label>
                        </div>
                        {min}
                        <input
                            type="range"
                            name="maxValue"
                            min={min}
                            max={max}
                            step={max / 100}
                            value={maxValue}
                            onChange={event => this.handleChange(event)}
                        />
                        {max}
                    </div>
                </div>
                <ul className="product-list">
                    {products}
                </ul>
            </React.Fragment>
        );
    }
}

export default ProductList;