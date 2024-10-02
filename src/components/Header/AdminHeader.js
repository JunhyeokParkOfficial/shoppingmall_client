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

const AdminHeader = () => {
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
        window.location.href = PAGE_URL.CART_PAGE(1);
    }

    const clickMyPage = () => {
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
                        :<></>
                    }
                </div>
                <div id="header-mid" style={{marginBottom:"30px"}}>
                    <div id="logo-box">
                        <a href="/">
                            <img src={logo} style={{width:'230px'}}/>
                        </a>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default AdminHeader;