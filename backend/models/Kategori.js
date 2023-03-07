import { Sequelize } from 'sequelize';
import db from '../config/database.js';

const { DataTypes } = Sequelize;

const Kategori = db.define(
  'm_kategori',
  {
    kode: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

export default Kategori;
