import {BrowserRouter as Router, Route,Routes, useLocation} from 'react-router-dom';
import Header from './pages/Header/Header';
import Products from './pages/Products/Products';
import Cart from './pages/Cart/Cart';
import Dashboard from './pages/admin/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductReg from './pages/admin/ProductReg';
import Info from './pages/Mypage/Info';
import MypageMain from './pages/Mypage/MypageMain';
import './styles/App.css';
import Detail from './pages/ProductDetail/ProductDetail';
import ProductEdit from './pages/admin/ProductEdit';
import MyOrder from './pages/Mypage/MyOrder';
import OrderManage from './pages/admin/orderManage/OrderManage';
import Reset from './pages/Reset';
import { PAGE_URL } from './constants/urls';
import UserRoutes from './routes/UserRoutes';
import AdminLogin from './pages/admin/AdminLogin';
import AdminRoutes from './routes/AdminRoutes';
import AdminHeader from './pages/Header/AdminHeader';
import ProductManage from './pages/admin/productManage/ProductManage';

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
          <Route path={PAGE_URL.PRODUCT_MANAGE} element={<ProductManage/>}></Route>
          <Route path={PAGE_URL.PRODUCT_REG} element={<ProductReg/>}></Route>
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
          <Route path={PAGE_URL.MYPAGE} element={<MypageMain/>}></Route>
          <Route path={PAGE_URL.INFO} element={<Info />}></Route>
          <Route path={PAGE_URL.MY_ORDER} element={<MyOrder/>}></Route>
          <Route path={PAGE_URL.CART} element={<Cart/>}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
