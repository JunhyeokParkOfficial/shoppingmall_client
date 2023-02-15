import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Header from './Header';
import All from './routes/Shop/All';
import Cart from './routes/Cart';
import Dashboard from './routes/admin/Dashboard';
import HeaderAdmin from './HeaderAdmin';
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
function App() {
  const [login,setLogin] = useState(false);
  const [admin,setAdmin] = useState(false);
  const [Email,setEmail] = useState("");
  useEffect(()=>{
    if(localStorage.getItem("admin")==="true"){
      setAdmin(true);
      console.log(admin);
    }
    const savedUsername = localStorage.getItem("username");
    if(savedUsername===null){
      setLogin(false);
    }
    else {
      setLogin(true);
      setEmail(savedUsername);
    }
  },[]);
  return (  
    <Router>
      {admin?<HeaderAdmin/>:<Header login={login} setLogin={setLogin}/>}
      <Routes>
        {admin?<>
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
          <Route path="/login" element={<Login setLogin={setLogin} setAdmin={setAdmin} setEmail={setEmail}/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/mypage" element={<MypageMain/>}></Route>
          <Route path="/mypage/information" element={<Info />}></Route>
          <Route path="/cart" element={<Cart login={login}/>}></Route>
        </>}
      </Routes>
    </Router>
  )
}

export default App;
