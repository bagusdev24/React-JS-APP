import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduk = () => {
  const [name, setName] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [harga, setHarga] = useState('');
  const [stock, setStock] = useState('');
  const [kategori, setKategori] = useState([]);
  const [id_kategori, setIdKategori] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    getKategori();
  }, []);

  const getKategori = async (e) => {
    const response = await axios.get('http://localhost:4000/produk/kategori');
    setKategori(response.data);
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/produk', {
      id_kategori: id_kategori,
      name: name,
      deskripsi: deskripsi,
      harga: harga,
      stock: stock
    });
    history('/');
  };

  return (
    <div className='container'>
      <form onSubmit={saveProduct}>
        <div className='mb-3'>
          <label className='form-label'>Kategori</label>
          <select
            className='form-control'
            required
            onChange={(e) => setIdKategori(e.target.value)}
          >
            <option>--Pilih Kategori--</option>
            {kategori.map((el) => (
              <option value={el.id}>{el.name}</option>
            ))}
          </select>
        </div>

        <div className='mb-3'>
          <label className='form-label'>Name</label>
          <input
            className='form-control'
            type='text'
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Deskripsi</label>
          <input
            className='form-control'
            type='text'
            required
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Harga</label>
          <input
            className='form-control'
            type='number'
            required
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Stock</label>
          <input
            className='form-control'
            type='number'
            required
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <button className='btn btn-primary'>Simpan</button>
      </form>
    </div>
  );
};

export default AddProduk;
