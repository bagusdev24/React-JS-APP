import Produk from '../models/Produk.js';
import Kategori from '../models/Kategori.js';

export const getKategori = async (req, res) => {
  try {
    const data = await Kategori.findAll();
    res.json(data);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const produk = await Produk.findAll();
    res.json(produk);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const produk = await Produk.findAll({
      where: {
        id: req.params.id
      }
    });
    res.json(produk[0]);
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    await Produk.create(req.body, {
      id_kategori: req.id_kategori,
      name: req.name,
      deskripsi: req.deskripsi,
      harga: req.harga,
      stock: req.stock
    });
    res.json({
      message: 'Produk Created'
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    await Produk.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.json({
      message: 'Product Updated'
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await Produk.destroy({
      where: {
        id: req.params.id
      }
    });
    res.json({
      message: 'Produk Deleted'
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};
