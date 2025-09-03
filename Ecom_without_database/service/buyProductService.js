const products = require('../models/Product');

function buyProduct(productId, userId) {
  const product = products.find(p => p._id === productId);
  if (!product) {
    throw new Error('Product not found');
  }
  if (product.stock <= 0) {
    throw new Error('Product out of stock');
  }
  product.stock -= 1;
  return {
    message: 'Product purchased successfully',
    productId: product._id,
    userId: userId,
  };
}

module.exports = { buyProduct };