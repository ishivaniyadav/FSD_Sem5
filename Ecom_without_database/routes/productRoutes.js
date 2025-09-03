const express = require('express');
const router = express.Router();
const products = require('../models/Product');
const { buyProductController } = require('../controllers/buyProductController');


// Get all products from in-memory array
router.get('/', (req, res) => {
  res.json(products);
});

router.post('/buy/:id', buyProductController); 
module.exports = router;