import {BrowserRouter as Router, Route,Routes, useLocation} from 'react-router-dom';
import Header from './components/Header/Header';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import Dashboard from './pages/admin/Dashboard';
import Home from './pages/Home/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductReg from './pages/ProductReg/ProductReg';
import AdminProductManage from './pages/admin/AdminProductManage/AdminProductManage';
import Info from './pages/MyInfo.js/MyInfo';
import './styles/App.css';
import Detail from './pages/ProductDetail/ProductDetail';
import ProductEdit from './pages/admin/ProductEdit';
import MyOrder from './pages/MyOrder/MyOrder';
import OrderManage from './pages/admin/orderManage/OrderManage';
import Reset from './pages/Reset';
import { PAGE_URL } from './constants/urls';
import UserRoutes from './routes/UserRoutes';
import AdminLogin from './pages/admin/AdminLogin';
import AdminRoutes from './routes/AdminRoutes';
import AdminHeader from './components/Header/AdminHeader';
import MyProduct from './pages/MyProduct/MyProduct';
import Footer from './components/Footer/Footer';

const Headers = () => {
  const location = useLocation();

  if (location.pathname.startsWith('/admin')) {
    return <AdminHeader/>;
  } else {
    return <Header/>;
  }
};

function App() {
  return ( 
    <Router>
      <Headers/>
      <Routes>
        <Route element={<AdminRoutes/>}>
          <Route path={PAGE_URL.ADMIN} element={<Dashboard/>}></Route>
          <Route path={PAGE_URL.ADMIN_PRODUCT_MANAGE} element={<AdminProductManage/>}></Route>
          <Route path={PAGE_URL.ORDER_MANAGE} element={<OrderManage/>}></Route>
          <Route path={PAGE_URL.PRODUCT_EDIT} element={<ProductEdit/>}></Route>
          </Route>
        <Route path={PAGE_URL.HOME} element={<Home />}></Route>
        <Route path={PAGE_URL.PRODUCT} element={<Products />}></Route>
        <Route path={PAGE_URL.LOGIN} element={<Login />}></Route>
        <Route path={PAGE_URL.LOGIN_ADMIN} element={<AdminLogin/>}></Route>
        <Route path={PAGE_URL.REGISTER} element={<Register/>}></Route>
        <Route path={PAGE_URL.PRODUCT_DETAIL} element={<Detail/>}></Route>
        <Route element={<UserRoutes/>}>
          <Route path={PAGE_URL.RESET} element={<Reset/>}></Route>
          <Route path={PAGE_URL.PRODUCT_REG} element={<ProductReg/>}></Route>
          <Route path={PAGE_URL.MYPAGE_PRODUCT} element={<MyProduct/>}></Route>
          <Route path={PAGE_URL.INFO} element={<Info />}></Route>
          <Route path={PAGE_URL.MY_ORDER} element={<MyOrder/>}></Route>
          <Route path={PAGE_URL.CART} element={<Cart/>}></Route>
        </Route>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;
