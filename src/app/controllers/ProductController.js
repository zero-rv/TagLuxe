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

    // GET '/products/create'
    create(req, res, next) {
        res.render('products/create');
    }

    // POST '/products/store'
    store(req, res, next) {
        const formData = req.body;
        const product = new Product(formData);
        product.save()
            .then(() => res.redirect('/'))
            .catch(err => { });
    }
}

module.exports = new ProductController();