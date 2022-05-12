
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProducts from './Pages/AddProducts/AddProducts';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register/Register';
import SocialLogin from './Pages/Login/SocialLogin/SocialLogin';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItem from './Pages/MyItem/MyItem';
import Checkout from './Pages/Checkout/Checkout';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/productDetails/:serviceId' element={<ProductDetails></ProductDetails>}></Route>

       <Route path='/manage-inventory' element={<ManageInventory></ManageInventory>}></Route>

        <Route path='/order/:serviceId' element={<Checkout></Checkout>}></Route>
        
        <Route path='/myitem' element={<MyItem></MyItem>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/SocialLogin' element={<SocialLogin></SocialLogin>}></Route>
        <Route path='/addproduct' element={<AddProducts></AddProducts>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
