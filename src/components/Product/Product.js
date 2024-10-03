import { useNavigate } from "react-router-dom/dist";
import { Axios } from "../../utils/CustomAxios";
import { ProductA, ProductButton, ProductImg } from "./Product.style";
import { PAGE_URL } from "../../constants/urls";

const Product = ({product}) =>{
    const uri = `/api/v1/admin/delete?id=${product.id}`
    const navigate = useNavigate();
    const baseUrl = process.env.REACT_APP_S3_URL;

    const deleteClick = async(event)=>{
      await Axios.delete(uri);
      window.location.reload();
    }
    const editClick = () => {
        navigate(`/admin/product/edit/${product.id}`);
    }

    return (
        <tr> 
            <td><ProductA href={PAGE_URL.PRODUCT_DETAIL_ID(product.id)}><ProductImg src={baseUrl+product.imageUrl}/></ProductA></td>
            <td><ProductA href={PAGE_URL.PRODUCT_DETAIL_ID(product.id)}>{product.name}</ProductA></td>
            <td>{product.price.toLocaleString("ko-KR")}원</td>
            <td>{product.status === 'FOR_SALE' ? '판매중' : '판매 완료'}</td>
            <td>
                <ProductButton onClick={editClick} type="button">수정</ProductButton>
                <ProductButton onClick={deleteClick} type="button">삭제</ProductButton>
            </td>
        </tr>
    )
}

export default Product;