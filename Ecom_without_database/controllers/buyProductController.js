const { buyProduct } = require('../service/buyProductService');

const buyProductController = (req, res) => {
    try {
        const productId = req.params.id;
        // userId is not used, but kept for compatibility
        const result = buyProduct(productId, null);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error in buyProduct:', error);
        res.status(400).json({ error: error.message });
    }
};

module.exports = { buyProductController };