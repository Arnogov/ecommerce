import React, {Component} from 'react';
import CartItem from "./CartItem";
import "./Cart.scss";

class Cart extends Component {
    render() {

        const productLi = this.props.products.map((product, key)=> <li key={key}><CartItem product={product}/></li>);
        return (
            <aside className="cart">
                <h2>Mon panier</h2>
                <ul>
                    {productLi}
                </ul>
            </aside>
        );
    }
}

export default Cart;