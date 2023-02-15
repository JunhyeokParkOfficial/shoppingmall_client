import axios from "axios";

const AdminProduct = ({product:product,getProduct:getProduct}) =>{
    const uri = `http://localhost:3001/product/${product.id}`
    const deleteClick = async(event)=>{
      await axios.delete(uri);
      getProduct();
    }
    
    return (
        <>
            <tr> 
                <td>이미지</td>
                <td className="">{product.item_name}</td>
                <td className="">{product.price}</td>
                <td className="">{product.stock}</td>
                <td className="">{product.item_status}</td>
                <td><input type="button" value="수정"/></td>
                <td><input onClick={deleteClick} type="button" value="삭제"/></td>
            </tr>
        </>
    )
}

export default AdminProduct;