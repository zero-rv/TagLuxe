
class AboutController {

    // GET '/about'
    index(req, res) {
        res.render('about');
    }

    // GET '/about/:slug'
    show(req, res) {
        res.send('Nguyen Tran Nhat Huy')
    };

}

module.exports = new AboutController();