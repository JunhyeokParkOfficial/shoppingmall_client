import { productStatus } from "../../constants/productStatus";
import { PAGE_URL } from "../../constants/urls";
import { CartImage, CartInfoDiv, CartTd, CartTr, DeleteButton } from "./CartItem.style";

const CartItem = ({data,checkedItemHandler}) => {
    const baseUrl = process.env.REACT_APP_S3_URL;

    const checkHandler = (e) => {
        checkedItemHandler(data.cartItemsId, e.target.checked);
    };

    const onDeleteClick = () => {
        
    }
    return (
        <CartTr>
            <CartTd style={{width:"45px"}}><input onChange={checkHandler} type="checkbox"/></CartTd>
            <CartTd style={{width:"480px"}}>
                <CartInfoDiv href={PAGE_URL.PRODUCT_DETAIL_ID(data.productId)}>
                    <CartImage src={baseUrl + data.imageUrl}/>
                    <div style={{marginLeft:"10px"}}>
                        {data.name}
                    </div>
                </CartInfoDiv>
            </CartTd>
            <CartTd>
                <div style={{width:"200px"}}>{data.price.toLocaleString("ko-KR")}원</div>
            </CartTd>
            <CartTd style={{width:"150px"}}>{productStatus[data.status]}</CartTd>
            <CartTd><DeleteButton onClick={onDeleteClick}> 삭제하기 </DeleteButton></CartTd>
        </CartTr>
    )
}

export default CartItem;