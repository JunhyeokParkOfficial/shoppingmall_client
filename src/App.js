import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Header from './pages/Header/Header';
import Products from './pages/Shop/Products';
import Cart from './pages/Cart/Cart';
import Dashboard from './pages/admin/Dashboard';
import HeaderAdmin from './pages/Header/HeaderAdmin';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductReg from './pages/admin/ProductReg';
import Info from './pages/Mypage/Info';
import MypageMain from './pages/Mypage/MypageMain';
import './styles/App.css';
import { useSelector } from 'react-redux';
import Detail from './pages/Shop/Detail';
import ProductEdit from './pages/admin/ProductEdit';
import AdminManage from './pages/admin/AdminManage';
import MyOrder from './pages/Mypage/MyOrder';
import OrderManage from './pages/admin/OrderManage';
import Reset from './pages/Reset';
import { PAGE_URL } from './constants/urls';

function App() {
  const user = useSelector(state=>state.user);
  return ( 
    <Router>
      {user.info.role==="ROLE_ADMIN"?<HeaderAdmin/>:<Header/>}
      <Routes>
        {user.info.role==="ROLE_ADMIN"?<>
          <Route path={PAGE_URL.ADMIN} element={<Dashboard/>}></Route>
          <Route path={PAGE_URL.ADMIN_MANAGE} element={<AdminManage/>}></Route>
          <Route path={PAGE_URL.PRODUCT_REG} element={<ProductReg/>}></Route>
          <Route path={PAGE_URL.ORDER_MANAGE} element={<OrderManage/>}></Route>
          <Route path={PAGE_URL.PRODUCT_EDIT} element={<ProductEdit/>}></Route>
        </>
        :<>
          <Route path={PAGE_URL.HOME} element={<Home />}></Route>
          <Route path={PAGE_URL.RESET} element={<Reset/>}></Route>
          <Route path={PAGE_URL.PRODUCT} element={<Products />}></Route>
          <Route path={PAGE_URL.LOGIN} element={<Login />}></Route>
          <Route path={PAGE_URL.REGISTER} element={<Register/>}></Route>
          <Route path={PAGE_URL.MYPAGE} element={<MypageMain/>}></Route>
          <Route path={PAGE_URL.INFO} element={<Info />}></Route>
          <Route path={PAGE_URL.MY_ORDER} element={<MyOrder/>}></Route>
          <Route path={PAGE_URL.CART} element={<Cart/>}></Route>
          <Route path={PAGE_URL.PRODUCT_DETAIL} element={<Detail/>}></Route>
        </>}
      </Routes>
    </Router>
  )
}

export default App;
