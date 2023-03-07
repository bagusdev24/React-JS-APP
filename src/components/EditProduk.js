import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduk = () => {
  const [name, setName] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [harga, setHarga] = useState('');
  const [stock, setStock] = useState('');
  const history = useNavigate();
  const { id } = useParams();

  const updateProduct = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:4000/produk/${id}`, {
      name: name,
      deskripsi: deskripsi,
      harga: harga,
      stock: stock
    });
    history('/');
  };

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = async () => {
    const response = await axios.get(`http://localhost:4000/produk/${id}`);
    setName(response.data.name);
    setDeskripsi(response.data.deskripsi);
    setHarga(response.data.harga);
    setStock(response.data.stock);
  };

  return (
    <div className='container'>
      <form onSubmit={updateProduct}>
        <div className='mb-3'>
          <label className='form-label'>Name</label>
          <input
            className='form-control'
            type='text'
            value={name}
            name='name'
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label className='form-label'>Deskripsi</label>
          <input
            className='form-control'
            type='text'
            name='deskripsi'
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
            name='harga'
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
            name='stock'
            required
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <button className='btn btn-primary'>Update</button>
      </form>
    </div>
  );
};

export default EditProduk;
