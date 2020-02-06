import React, {Component} from 'react';

class Product extends Component {
    render() {

        const {product} = this.props;
        const stock = product.stock - product.qte;

        return (
            <article>
                <h2>{product.name}</h2>
                <img src={product.image} alt=""/>
                <div>En stock: {stock}</div>
                <button onClick={event => this.props.addToCart(product)} disabled={stock ===0}>
                    Ajouter au panier
                </button>
            </article>
        );
    }
}

export default Product;