const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Obtener todos los productos
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener productos' });
  }
});

// Agregar un nuevo producto
router.post('/', async (req, res) => {
  const { name, price } = req.body;
  const newProduct = new Product({ name, price });

  try {
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar producto' });
  }
});

module.exports = router;
