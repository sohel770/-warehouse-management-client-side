
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProducts from './Pages/AddProducts/AddProducts';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import SocialLogin from './Pages/Login/SocialLogin/SocialLogin';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItem from './Pages/MyItem/MyItem';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Logins/Login';
import Register from './Pages/Register/Register';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>

        <Route path='/inventory/:serviceId' element={<ProductDetails></ProductDetails>}></Route>

        <Route path='/manage-inventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>

        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/order/:serviceId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }

        ></Route>

        <Route path='/myitem' element={

          <RequireAuth> <MyItem></MyItem></RequireAuth>
        }></Route>

        <Route path='/SocialLogin' element={<SocialLogin></SocialLogin>}></Route>
        <Route path='/addproduct' element={
          <RequireAuth><AddProducts></AddProducts></RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
