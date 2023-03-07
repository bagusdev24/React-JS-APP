import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProdukList.js';
import AddProduct from './components/AddProduk.js';
import EditProduct from './components/EditProduk.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<ProductList />} />
        <Route exact path='/add' element={<AddProduct />} />
        <Route exact path='/edit/:id' element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
