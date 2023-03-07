import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Produk = db.define(
  'produk',
  {
    id_kategori: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    deskripsi: {
      type: DataTypes.STRING
    },
    harga: {
      type: DataTypes.INTEGER
    },
    stock: {
      type: DataTypes.INTEGER
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

export default Produk;
