import React, {Component} from 'react';
import ProductList from "./components/ProductList";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    name: 'Appareil photo',
                    image: 'https://i.picsum.photos/id/250/200/300.jpg',
                    price: 250.50,
                    stock: 3
                },
                {
                    name: 'Bateau',
                    image: 'https://i.picsum.photos/id/211/200/300.jpg',
                    price: 75000,
                    stock: 1
                }, {
                    name: 'Théière',
                    image: 'https://i.picsum.photos/id/225/200/300.jpg',
                    price: 30,
                    stock: 15
                },

            ]
        }
    }

    render() {
        return (
            <div>
                <ProductList products={this.state.products}/>
            </div>
        );
    }
}

export default App;
