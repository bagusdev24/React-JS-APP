import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProdukList = () => {
  const [produk, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get('http://localhost:4000/produk');
    setProduct(response.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:4000/produk/${id}`);
    getProducts();
  };

  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-md-12'>
          <Link to='/add' className='btn btn-primary mb-3'>
            Add New
          </Link>
          <div className='responsive'>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Kategori</th>
                  <th>Name</th>
                  <th>Deskripsi</th>
                  <th>Harga</th>
                  <th>Stock</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {produk.map((el, index) => (
                  <tr key={el.id}>
                    <td>{index + 1}</td>
                    <td>{el.id_kategori}</td>
                    <td>{el.name}</td>
                    <td>{el.deskripsi}</td>
                    <td>{el.harga}</td>
                    <td>{el.stock}</td>
                    <td>
                      <Link
                        to={`/edit/${el.id}`}
                        className='btn btn-sm btn-warning'
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteProduct(el.id)}
                        className='btn btn-sm btn-danger'
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdukList;
