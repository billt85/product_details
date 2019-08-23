import React from 'react';

const Shippings = (props) => (
    <div>
        <p>{props.product.StyleNo}</p>
        <p>{props.product.ShippingMethod}</p>
        <p>{props.product.ShippingFee}</p>
    </div>
);

export default Shippings;



// const productsDetailSchema = new mongoose.Schema({
//     StyleNo: { type: Number, unique: true },
//     ColorCode: Number,
//     ProductDescription: String,
//     Dimensions: String,
//     Specifications: String
//   });

// const shippingsSchema = new mongoose.Schema({
//     StyleNo: { type: Number, unique: true },
//     ShippingMethod: String,
//     ShippingTime: String,
//     ShippingFee: String
// });