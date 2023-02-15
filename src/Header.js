import { Link, useNavigate } from 'react-router-dom';
import './css/Header.css';

const Header = ({login:login,setLogin:setLogin}) => {
    const navigate = useNavigate();
    const logoutClick = () =>{
        localStorage.clear();console.log("logout!!");
        navigate(`/`);
    }
    return (
       <div id="Header">
            <div className="Nav">
                <div className="Header">
                    <div className="logo">
                        <Link to="/">SHOPPING MALL</Link>
                    </div>
                    <div className="menu_list">
                        <ul className="menu">
                            <li className="drop">
                                <p>
                                    <Link to="/category/0">SHOP</Link>
                                </p>
                                <ul className="sub sub1">
                                    <div className="inner">
                                        <ul>
                                            <p>
                                                <Link to='/category/0'>ALL</Link>
                                            </p>
                                            <p>
                                                <Link to='/category/1'>CATEGORY1</Link>
                                            </p>
                                            <p>
                                                <Link to='/category/2'>CATEGORY2</Link>
                                            </p>
                                            <p>
                                                <Link to='/category/3'>CATEGORY3</Link>
                                            </p>
                                        </ul>
                                    </div>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="membership_list">
                        <ul className="menu">
                            <li className="drop">
                                MEMBERSHIP
                                <ul className="sub sub2">
                                    <div className="inner">
                                        <ul>
                                            {login?(
                                                <div>
                                                    <p >
                                                        <a onClick={logoutClick} href="/">LOGOUT</a>
                                                    </p>
                                                    <p>
                                                        <Link to='/mypage'>MY PAGE</Link>
                                                    </p>
                                                </div>
                                                ):(
                                                <div>
                                                    <p>
                                                        <Link to='/login'>LOGIN</Link>
                                                    </p>
                                                    <p>
                                                        <Link to='/register'>REGISTER</Link>
                                                    </p>
                                                </div>
                                                )}
                                            
                                        </ul>
                                    </div>
                                </ul>
                            </li>
                            <li>
                                {login?<a href='/cart'>CART</a>:<a href='/login'>CART</a>}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Header;