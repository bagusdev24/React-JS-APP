import express from 'express';

import {
  getAllProducts,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getKategori
} from '../controllers/ProdukController.js';

const router = express.Router();

router.get('/', getAllProducts);
router.get('/kategori', getKategori);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.patch('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;
