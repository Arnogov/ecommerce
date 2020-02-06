import React, {Component} from 'react';
import CartItem from "./CartItem";
import "./Cart.scss";

class Cart extends Component {
    render() {

        const productLi = this.props.products.map((product, key)=> <li key={key}><CartItem product={product}/></li>);

        /*
    let total = 0;
    for (let i = 0; i < this.props.products.length; i++) {
      let p = this.props.products[i];
      total += p.qte * p.price;
    }
    */
        const total = this.props.products.reduce((accumulator, p) => accumulator + (p.price * p.qte), 0);

        return (
            <aside className="cart">
                <h2>Mon panier</h2>
                <ul>
                    {productLi}
                </ul>
                <div>
                    Montant total du panier : {total} €
                </div>
            </aside>
        );
    }
}

export default Cart;