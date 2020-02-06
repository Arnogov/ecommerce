import React, {Component} from 'react';
import Product from "./Product";
import "./ProductList.scss";

class ProductList extends Component {
    render() {

        const products = this.props.products.map((product, key) => <li key={key}><Product product={product} addToCart={p => this.props.addToCart(p)}/></li>);

        return (
            <ul className="product-list">
                {products}
            </ul>
        );
    }
}

export default ProductList;