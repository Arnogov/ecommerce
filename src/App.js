import React, {Component} from 'react';
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.scss";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    name: 'Appareil photo',
                    image: 'https://i.picsum.photos/id/250/200/300.jpg',
                    price: 250.50,
                    stock: 3,
                    qte: 1
                },
                {
                    name: 'Bateau',
                    image: 'https://i.picsum.photos/id/211/200/300.jpg',
                    price: 75000,
                    stock: 1,
                    qte: 0
                }, {
                    name: 'Théière',
                    image: 'https://i.picsum.photos/id/225/200/300.jpg',
                    price: 30,
                    stock: 15,
                    qte: 3
                },

            ]
        }
    }

    render() {
        return (
            <main className="main-container">
                <ProductList products={this.state.products}/>
                <Cart products={this.state.products.filter(product => product.qte > 0)}/>
            </main>
        );
    }
}

export default App;
