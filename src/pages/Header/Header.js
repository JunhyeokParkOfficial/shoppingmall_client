import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Axios } from '../../utils/CustomAxios';
import { remove_userInfo } from '../../store/authReducer';
import { useCookies } from 'react-cookie';
import { useState } from 'react';
import categoryIcon from '../../assets/category.png'
import logo from '../../assets/logo.png'
import cartIcon from '../../assets/cart.png'
import userIcon from '../../assets/user.png'
const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(state=>state.user);
    const [cookies, setCookie, removeCookie] = useCookies();
    const [isHovering, setIsHovering] = useState(false);

    const logout = () =>{
        dispatch(remove_userInfo());
        localStorage.removeItem("accessToken");
        removeCookie('refreshToken');
        const uri="api/v1/member/logout";
        Axios.get(uri);
    }

    const navigateToLogin = () => {
        window.location.href = "/login"
    }

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
    };

    const categoryText = {
        book: '도서',
        ticket: '티켓/문구',
        clothing: '의류',
        shoes: '신발',
        accessary: '액세서리',
        digital: '디지털',
        food: '식품',
        beauty: '뷰티/미용'
    };

    return (
        <div id="header-container">
            <div id="header">
                <div id="header-top">
                    {user.isLoggedIn?
                         <button onClick={logout}>로그아웃</button>
                        :
                        <button onClick={navigateToLogin}>로그인/회원가입</button>
                    }
                </div>
                <div id="header-mid">
                    <div id="logo-box">
                        <Link to="/">
                            <img src={logo} style={{height:'50px'}}/>
                        </Link>
                    </div>
                    <div id='search-box'>
                        <input id='search-input' placeholder='검색어를 입력해 주세요.'></input>
                    </div>
                    <div id='button-box'>
                        <a onClick={navigateToLogin}>
                            <img src={cartIcon} style={{marginRight:'7px'}}/>장바구니
                        </a>
                        <a onClick={navigateToLogin} style={{marginRight:'5px'}}>
                            <img src={userIcon} style={{marginRight:'3px'}}/>마이페이지
                        </a>
                    </div>
                </div>  
                <div id='header-bottom'>
                    <div id='category-box' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                        <button>
                            <img src={categoryIcon} />
                            카테고리
                        </button>
                        {isHovering?
                            (<div id='dropdown-menu-box'>
                                <ul>
                                    {Object.keys(categoryText).map((key)=>{
                                        return (
                                            <li className='category-item-box'>
                                                <a href={`/product?category=${key}`}>{categoryText[key]}</a>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>)
                            :(<></>)}
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Header;