import React, {Component} from 'react';
import {Route} from "react-router";
import {NavLink} from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.scss";
import Contact from "./components/Contact";
import ProductItem from "./components/ProductItem";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            loading: true
        };
    }

    componentDidMount() {
        fetch('http://127.0.0.1:8000/product/')
            .then(response => response.json())
            .then(data => this.setState({products: data.map(p => {
                    p.qte = 0;
                    return p;
                }), loading: false }))
    }

    addToCart(product) {
        let products = [...this.state.products]; // Créer une copie du tableau
        products[this.state.products.indexOf(product)].qte++;
        this.setState({ products: products });
    }

    removeFromCart(product) {
        let products = [...this.state.products]; // Créer une copie du tableau
        products[this.state.products.indexOf(product)].qte--;
        this.setState({ products: products });
    }

    render() {

        if (this.state.loading) {
            return <loading/>
        }

        return (
            <main className="main-container">
                <h1>Mon site e-commerce</h1>
                <nav>
                    <ul>
                        <li><NavLink to="/">Accueil</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </nav>

                <div className="page-container">
                    <Route path="/" exact>
                        <ProductList
                            products={this.state.products}
                            addToCart={p => this.addToCart(p)}
                        />
                    </Route>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/product/:id" component={ProductItem}/>
                    <Cart
                        products={this.state.products.filter(product => product.qte > 0)}
                        removeFromCart={p => this.removeFromCart(p)}
                        addToCart={p => this.addToCart(p)}
                    />
                </div>

            </main>
        );
    }
}

export default App;