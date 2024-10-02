import { useDispatch, useSelector } from 'react-redux';
import { remove_userInfo } from '../../store/authReducer';
import { useState } from 'react';
import categoryIcon from '../../assets/category.png'
import logo from '../../assets/logo.png'
import cartIcon from '../../assets/cart.png'
import userIcon from '../../assets/user.png'
import { requestLogout } from '../../services';
import { PAGE_URL } from '../../constants/urls';
import { categories } from '../../constants/categories';

const Header = () => {
    const dispatch = useDispatch();
    const user = useSelector(state=>state.user);
    const [isHovering, setIsHovering] = useState(false);

    const logout = () =>{
        dispatch(remove_userInfo());
        requestLogout()
            .then((res)=>{
                console.log(res);
                localStorage.removeItem("access_token");
                window.location.reload();
            })
    }

    const navigateToLogin = () => {
        window.location.href = PAGE_URL.LOGIN;
    }

    const clickCart = () => {
        if(!user.isLoggedIn) window.location.href = PAGE_URL.LOGIN;
        window.location.href = PAGE_URL.CART;
    }

    const clickMyPage = () => {
        if(!user.isLoggedIn) window.location.href = PAGE_URL.LOGIN;
        window.location.href = PAGE_URL.MYPAGE;
    }

    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false);
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
                        <a href="/">
                            <img src={logo} style={{width:'230px'}}/>
                        </a>
                    </div>
                    <div id='search-box'>
                        <input id='search-input' placeholder='검색어를 입력해 주세요.'></input>
                    </div>
                    <div id='button-box'>
                        <a onClick={clickCart}>
                            <img src={cartIcon} style={{marginRight:'7px'}}/>장바구니
                        </a>
                        <a onClick={clickMyPage} style={{marginRight:'5px'}}>
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
                                    {Object.keys(categories).map((key)=>{
                                        return (
                                            <li className='category-item-box'>
                                                <a href={`/product?category=${key}`}>{categories[key]}</a>
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