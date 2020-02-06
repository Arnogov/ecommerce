import React, {Component} from 'react';

class Product extends Component {
    render() {

        const product = this.props.product;
        return (
            <article>
                <h2>{product.name}</h2>
                <img src={product.image} alt=""/>;
            </article>
        );
    }
}

export default Product;