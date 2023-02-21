import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Header from './routes/Header/Header';
import All from './routes/Shop/All';
import Cart from './routes/Cart/Cart';
import Dashboard from './routes/admin/Dashboard';
import HeaderAdmin from './routes/Header/HeaderAdmin';
import Home from './routes/Home';
import Login from './routes/Login';
import Register from './routes/Register';
import Order from './routes/admin/Order';
import ProductReg from './routes/admin/ProductReg';
import AdminProducts from './routes/admin/AdminProducts';
import Info from './routes/Mypage/Info';
import MypageMain from './routes/Mypage/MypageMain';
import Shop1 from './routes/Shop/Shop1';
import Shop2 from './routes/Shop/Shop2';
import Shop3 from './routes/Shop/Shop3';
import './App.css';
import { useSelector } from 'react-redux';
import Detail from './routes/Shop/Detail';

function App() {
  // 유저 상태 가져옴
  const user = useSelector(state=>state.user);
  console.log(user);
  return ( 
    <Router>
      {/* 사용자 롤에 따른 헤더 및 페이지 */}
      {user.info.role==="admin"?<HeaderAdmin/>:<Header/>}
      <Routes>
        {user.info.role==="admin"?<>
          <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
          <Route path="/admin/product/register" element={<ProductReg/>}></Route>
          <Route path="/admin/product" element={<AdminProducts/>}></Route>
          <Route path="/admin/order" element={<Order/>}></Route>
        </>
        :<>
          <Route path="/" element={<Home />}></Route>
          <Route path="/category/0" element={<All />}></Route>
          <Route path="/category/1" element={<Shop1/>}></Route>
          <Route path="/category/2" element={<Shop2/>}></Route>
          <Route path="/category/3" element={<Shop3/>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/mypage" element={<MypageMain/>}></Route>
          <Route path="/mypage/information" element={<Info />}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/detail/:id" element={<Detail/>}></Route>
        </>}
      </Routes>
    </Router>
  )
}

export default App;
