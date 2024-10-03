import { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import { MyProductsContainer, Title } from "./ProductManage.style";
import { getMyProducts } from "../../services";
import { PAGE_URL } from "../../constants/urls";
import MypageLayout from "../../components/MypageLayout/MypageLayout";
import MypageMenu from "../../components/MyPageMenu/MypageMenu";

const ProductManage = () => {
    const [list, setList] = useState([]);

    useEffect(()=>{
        getMyProducts();
      },[]);

    const onRegisterClick = () => {
        window.location.href = PAGE_URL.PRODUCT_REG;
    }

    return (
        <MypageLayout title='내 상품 관리'>
            <div style={{marginTop:"30px", marginBottom:"10px"}}>
                <button onClick={onRegisterClick}>상품 등록</button>
            </div>
            <div className="product_table_container">
                <table className="product_table">
                <tbody>
                    <tr>  
                    <td></td>
                    <td className="">상품명</td>
                    <td className="">가격</td>
                    <td className="">상품 상태</td>
                    <td></td>
                    <td></td>
                    </tr>
                        {list.map((product)=>
                        <Product/>
                        )}
                    </tbody>
                </table>
            </div>
        </MypageLayout>
    )
}

export default ProductManage;