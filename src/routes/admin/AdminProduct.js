import { useNavigate } from "react-router-dom/dist";
import { Axios } from "../../CustomAxios";

const AdminProduct = ({product,getProduct}) =>{
    const uri = `/product/${product.id}`
    const navigate = useNavigate();
    //삭제버튼 클릭
    const deleteClick = async(event)=>{
      await Axios.delete(uri);
      getProduct();
    }
    const editClick = () => {
        navigate(`/admin/product/edit/${product.id}`);
    }
    return (
        <>
            <tr> 
                <td>이미지</td>
                <td className="">{product.itemName}</td>
                <td className="">{product.price}</td>
                <td className="">{product.stockNumber}</td>
                <td className="">{product.itemStatus}</td>
                <td><input onClick={editClick}type="button" value="수정"/></td>
                <td><input onClick={deleteClick} type="button" value="삭제"/></td>
            </tr>
        </>
    )
}

export default AdminProduct;