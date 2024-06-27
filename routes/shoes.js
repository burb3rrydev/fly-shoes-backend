// routes/shoes.js
const express = require('express');
const router = express.Router();
const shoesController = require('../controllers/shoesController');

router.get('/', shoesController.getAllShoes);
router.get('/:id', shoesController.getShoeById);
router.post('/', shoesController.addShoe);
router.put('/:id', shoesController.updateShoe);
router.delete('/:id', shoesController.deleteShoe);

module.exports = router;
