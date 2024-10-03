import { useEffect, useState } from "react";
import Product from "../../components/Product/Product";
import { getMyProducts } from "../../services";
import { PAGE_URL } from "../../constants/urls";
import MypageLayout from "../../components/MypageLayout/MypageLayout";
import { EmptyMyProductDiv, HeadTr, ImageTd, ImageTh, NameTd, NameTh, PriceTh, ProductTable, StatusTh } from "./MyProduct.style";

const MyProduct = () => {
    const [list, setList] = useState([]);

    useEffect( async ()=>{
        const data = await getMyProducts();
        setList(data);
      },[]);

    const onRegisterClick = () => {
        window.location.href = PAGE_URL.PRODUCT_REG;
    }

    return (
        <MypageLayout title='내 상품 관리'>
            <div style={{marginTop:"30px", marginBottom:"10px"}}>
                <button onClick={onRegisterClick}>상품 등록</button>
            </div>
            {list.length == 0?
            <EmptyMyProductDiv>등록한 상품이 없습니다.</EmptyMyProductDiv>
            :
            <ProductTable>
                <HeadTr>  
                    <ImageTh></ImageTh>
                    <NameTh>상품명</NameTh>
                    <PriceTh>가격</PriceTh>
                    <StatusTh>상품 상태</StatusTh>
                    <th></th>
                    <th></th>
                </HeadTr>
                {list.map((product)=>
                <Product product={product}/>
                )}
            </ProductTable>
            }
        </MypageLayout>
    )
}

export default MyProduct;