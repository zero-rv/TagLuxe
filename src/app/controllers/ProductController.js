const Product = require('../models/Product');

class ProductController {

    // GET '/products/:slug'
    async show(req, res, next) {
        try {
            const product = await Product.findOne({ slug: req.params.slug }).lean();
            res.json(product);
            // res.render('products/show', { products, key: 'hot_item' });
        } catch (err) {
            next(err);
        }
    }


}

module.exports = new ProductController();