const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('We are connected');
});

const productsDetailSchema = new mongoose.Schema({
    StyleNo: { type: Number, unique: true },
    ColorCode: Number,
    ProductDescription: String,
    Dimensions: String,
    Specifications: String
  });

const shippingsSchema = new mongoose.Schema({
    StyleNo: { type: Number, unique: true },
    ShippingMethod: String,
    ShippingTime: String,
    ShippingFee: String
});

const productsDetail = mongoose.model('productsDetail', productsDetailSchema);
const shippings = mongoose.model('shippingsSchema', shippingsSchema);

module.exports = { productsDetail: productsDetail, shippings: shippings };