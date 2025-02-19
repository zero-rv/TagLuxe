const Product = require('../models/Product');

class SiteController {

    // GET '/'
    async home(req, res, next) {
        try {
            const products = await Product.find({}).lean();
            res.render('home', { products, key: 'hot_item' });
        } catch (err) {
            next(err);
        }
    }


}

module.exports = new SiteController();