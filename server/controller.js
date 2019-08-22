const Products = require('../database/index');

const get = (req, res) => {
    Products.find()
        .then(data => res.status(200).send(data))
        .catch(err => res.status(404).send(err))
}

module.exports = { get };