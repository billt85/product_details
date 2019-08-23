import React from 'react';
import axios from 'axios';
import Products from './Products.js'

class App extends React.Component {

    constructor(props) {
        super(props); {
        this.state = {
            products: [ {
                StyleNo: '',
                ColorCode: '',
                ProductDescription: '',
                Dimensions: '',
                Specifications: ''
            }
            ]
        }
        }
        this.getProducts = this.getProducts.bind(this);
    };

getProducts () {
    axios
        .get('/products')
        .then(data => this.setState ({
            products: data.data
        }, () => console.log(this.state.products)))
    .catch(err => console.log(err))
}

render() {
    return (
        <div className="app-container">
        <Products products={this.state.products}/>
        </div>
    );
  }
}

export default App;