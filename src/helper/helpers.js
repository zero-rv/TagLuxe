const handlebars = require('handlebars');

handlebars.registerHelper('filterProducts', (products, key, options) => {
    const filteredProducts = products.filter(product => product[key]);
    let html = filteredProducts.map(product => `
        <div class="product__item width__1-4">
            <div class="product__item-wrap">
                <a href="/products/${product.slug}">
                    <img class="product__item-img" src="${product.img}" alt="${product.name}">
                    <button class="product__buy-btn" onclick="addToCart(${product.id})">
                        <i class="product__buy-btn-icon fa-solid fa-cart-shopping"></i>
                    </button>
                </a>
            </div>
            <a class="product__item-link" href="/products/${product.slug}">
                <h3 class="product__item-name">${product.name}</h3>
            </a>
            <div class="product__item-price">
                <p class="product__item-price--new">${product.new_price.toLocaleString()}đ</p>
                ${product.old_price ? `<p class="product__item-price--old">${product.old_price.toLocaleString()}đ</p>` : ''}
            </div>
        </div>
    `).join('');

    return html;
});




module.exports = handlebars;