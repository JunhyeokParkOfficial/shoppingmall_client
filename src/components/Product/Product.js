import { useNavigate } from "react-router-dom/dist";
import { Axios } from "../../utils/CustomAxios";

const Product = ({product,fetchData}) =>{
    const uri = `/api/v1/admin/delete?id=${product.id}`
    const navigate = useNavigate();
    const baseUrl = process.env.REACT_APP_S3_URL;

    const deleteClick = async(event)=>{
      await Axios.delete(uri);
      fetchData();
    }
    const editClick = () => {
        navigate(`/admin/product/edit/${product.id}`);
    }

    return (
        <>
            <tr> 
                <td><img style={{width:"100px",height:"100px"}} src={baseUrl+product.imageUrl}/></td>
                <td className="">{product.name}</td>
                <td className="">{product.price}</td>
                <td className="">{product.status === 'FOR_SALE' ? '판매중' : '품절'}</td>
                <td>
                    <input onClick={editClick}type="button" value="수정"/>
                    <input onClick={deleteClick} type="button" value="삭제"/>
                </td>
            </tr>
        </>
    )
}

export default Product;