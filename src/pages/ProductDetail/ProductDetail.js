import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../utils/CustomAxios";
import { queryProductDetail } from "../../services/product";
import { CartAndPurchaseDiv, CartButton, CountButtonDiv, CountDiv, CountTitleDiv, DetailBoxDiv, DetailContainer, DetailDiv, ImageDiv, InfoBox, InfoDiv, InfosDiv, InfoSpan, InfoTitleSpan, NameDiv, PriceDiv, PriceSpan, PriceTitleSpan, PurchaseButton, SimpleBox, TotalPriceDiv, TotalPriceSpan, TotalPriceTitleDiv } from "./ProductDetail.style";
import { categories } from "../../constants/categories";

const Detail = () => {
    const user = useSelector(state=>state.user);
    const navigate = useNavigate();
    const {id} = useParams();
    const [data,setData] = useState({});
    const [count,setCount] = useState(1);

    const baseUrl = process.env.REACT_APP_S3_URL;
    
    useEffect(async () => {
        const res = await queryProductDetail(id);
        setData(res);
    },[]);

    const onMinusClick = () => {
        if(count!==1)setCount(count-1);
    }
    const onPlusClick = () => {
        setCount(count+1);
    }

    const onCartClick = () => {
        if(!user.isLoggedIn){
            navigate("/login");
        }
        else {
            const postdata = {"itemId":id,"count":count};
            const uri = "/api/v1/cart"
            Axios.post(uri,postdata);
            document.querySelector(".popup_container_hidden").classList.add("popup_container");
            document.querySelector(".popup_container").classList.remove("popup_container_hidden");
        }
    }
    const onXbtnClick = () => {
        document.querySelector(".popup_container").classList.add("popup_container_hidden");
        document.querySelector(".popup_container_hidden").classList.remove("popup_container");
    }

    const onOrderClick = () => {
        if(!user.isLoggedIn){
            navigate("/login");
        }
        else {
            let res = window.confirm("상품을 구매하시겠습니까?");
            if(res){
                const uri = "/api/v1/order/do";
                let postdata = {itemId:data.id,count:count};
                Axios.post(uri,postdata)
                .then(navigate("/mypage/order/1"))
                .catch((err)=>{
                    alert("주문할 수 없습니다");
                    console.log(err.response);
                })
            }
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
            <div className="popup_container_hidden">
                <div className="cart_popup">
                    <div className="cart_popup_x">
                    <button onClick={onXbtnClick}>
                        Ⅹ
                    </button>
                    </div>
                    장바구니에 상품을 담았습니다.
                    <div className="gocart_link">
                    <a href="/cart/1">
                        <div>
                            장바구니 바로가기
                        </div>
                    </a>
                    </div>
                    
                </div>
            </div>
        </DetailContainer>
    )
}

export default Detail;