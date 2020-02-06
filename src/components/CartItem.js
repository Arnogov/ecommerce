import React, {Component} from 'react';
import "./CartItem.scss";
import BtnAddToCart from "./BtnAddToCart";


class CartItem extends Component {
    render() {

        const {product} = this.props;
        const stock = product.stock - product.qte;

        return (
            <article className="cart-item">
                <img src={product.image} alt={product.name}/>
                <div className="cart-item-content">
                    <h3>{product.name}</h3>
                    <div>Prix : {product.price} €</div>
                    <div>Quantité : {product.qte}</div>
                    <button onClick={event => this.props.removeFromCart(product)}>-</button>
                    <BtnAddToCart
                        addToCart={p => this.props.addToCart(p)}
                        product={product}
                    >
                        +
                    </BtnAddToCart>
                    <div>
                        Total : {product.price * product.qte} €
                    </div>
                </div>
            </article>
        );
    }
}

export default CartItem;