import React from 'react';
import Shippings from './Shippings.js';

const Products = (props) => (
    <div className="container">
        <ul>{
            props.products.map((product,i) => {
                return <Shippings key={i} product={product}/>
            })
        }
        </ul>
    </div>
)


export default Products;