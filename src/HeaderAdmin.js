import { Link, useNavigate } from 'react-router-dom';
import './css/HeaderAdmin.css';

const HeaderAdmin = ({login:login,setLogin:setLogin}) => {
    const navigate = useNavigate();
    const logoutClick = () =>{
        localStorage.clear();console.log("logout!!");
        navigate(`/`);
    }
    return (
       <><div id="Header">
            <div className="Nav">
                <div className="Header">
                    <div className="logo">
                       SHOPPING MALL
                    </div>
                    <div onClick={logoutClick}className='logoutMenu'>
                        <a href='/'>LOGOUT</a>
                    </div>
                </div>
            </div>
       </div>
       <div>
       <div className="left_menu">
           <ul>
               <li>
                   <div>
                       <Link to='/admin/dashboard'>대시보드</Link>
                   </div>
               </li>
               <li>
                   <div>
                       <Link to='/admin/order'>주문조회</Link>
                   </div>
               </li>
               <li>
                   <div>
                       <Link to='/admin/product'>상품관리</Link>
                   </div>
               </li>
           </ul>
       </div>
   </div></>
    )
}

export default HeaderAdmin;