import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { queryProductDetail } from "../../services/product";
import { CartAndPurchaseDiv, CartButton, CloseButtonDiv, DetailBoxDiv, DetailContainer, DetailDiv, ImageDiv, InfoBox, InfoDiv, InfosDiv, InfoSpan, InfoTitleSpan, NameDiv, NavigateCartA, NavigateCartDiv, PopupCloseButton, PopupDiv, PriceDiv, PriceSpan, PriceTitleSpan, PurchaseButton, SimpleBox, TotalPriceDiv, TotalPriceSpan, TotalPriceTitleDiv } from "./ProductDetail.style";
import { categories } from "../../constants/categories";
import { PAGE_URL } from "../../constants/urls";
import { requestAddToCart } from "../../services";

const Detail = () => {
    const user = useSelector(state=>state.user);
    const {id} = useParams();
    const [data,setData] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    const baseUrl = process.env.REACT_APP_S3_URL;
    
    useEffect(async () => {
        const res = await queryProductDetail(id);
        setData(res);
    },[]);

    const onCartClick = async () => {
        if(!user.isLoggedIn){
            window.location.href = PAGE_URL.LOGIN;
        } else {
            await requestAddToCart(id);
            setShowPopup(true);
        }
    }
    const handleClosePopup = () => {
        setShowPopup(false);
    }

    const onOrderClick = () => {
        if(!user.isLoggedIn){
            window.location.href = PAGE_URL.LOGIN;
        }
        else {
            let res = window.confirm("상품을 구매하시겠습니까?");
        }
    }
    return (
        <DetailContainer>
            <SimpleBox>
                <ImageDiv>
                    <img style={{height:"500px"}} src={baseUrl + data.imageUrl}/>
                </ImageDiv>
                <InfosDiv>
                    <NameDiv>{data.name}</NameDiv>
                    <InfoDiv>
                        <InfoTitleSpan>분류</InfoTitleSpan>
                        <InfoSpan className="detail_title_pricedisplay">{categories[data.category]}</InfoSpan>
                    </InfoDiv>
                    <InfoDiv>
                        <InfoTitleSpan>조회수</InfoTitleSpan>
                        <InfoSpan className="detail_title_pricedisplay">{data.views}</InfoSpan>
                    </InfoDiv>
                    <TotalPriceDiv>
                        <TotalPriceTitleDiv>판매가</TotalPriceTitleDiv>
                        <TotalPriceSpan>{data.price?data.price.toLocaleString("ko-KR"):0}원</TotalPriceSpan>
                    </TotalPriceDiv>
                    <CartAndPurchaseDiv>
                        <CartButton  onClick={onCartClick}><a>장바구니</a></CartButton>
                        <PurchaseButton onClick={onOrderClick}>바로 구매</PurchaseButton>
                    </CartAndPurchaseDiv>
                </InfosDiv>
            </SimpleBox>
            <DetailBoxDiv>
                <hr></hr>
                <div>상세정보</div>
                <DetailDiv>
                    <pre>{data.detail}</pre>
                </DetailDiv>
            </DetailBoxDiv>
            
                <PopupDiv show={showPopup}>
                    <CloseButtonDiv>
                        <PopupCloseButton onClick={handleClosePopup}>
                            Ⅹ
                        </PopupCloseButton>
                    </CloseButtonDiv>
                    장바구니에 상품을 담았습니다.
                    <NavigateCartA href={PAGE_URL.CART}>
                        장바구니 바로가기
                    </NavigateCartA>
                    
                </PopupDiv>
        </DetailContainer>
    )
}

export default Detail;