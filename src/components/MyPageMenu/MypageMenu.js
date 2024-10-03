import { PAGE_URL } from "../../constants/urls";
import { MenuContainer, MenuTitleH2 } from "./MypageMenu.style";

const MypageMenu = () => {
    return (
        <MenuContainer>
            <MenuTitleH2>마이페이지</MenuTitleH2>
            <div style={{marginBottom:"40px"}}>
                <p className='mypage_menuname'>쇼핑</p>
                <div className='mypage_menu'><a href={PAGE_URL.MYPAGE_PRODUCT}>내 상품 관리</a></div>
                <div className='mypage_menu'><a href="/mypage/order/1">주문/배송 조회</a></div>
            </div>
            <div>
                <p className='mypage_menuname'>계정 설정</p>
                <div className='mypage_menu'><a href='/mypage/information'>개인정보관리</a></div>
                <div className='mypage_menu'><a>배송지 관리</a></div>
                <div className='mypage_menu'><a>회원 탈퇴</a></div>
            </div>
        </MenuContainer>
    )
}

export default MypageMenu;