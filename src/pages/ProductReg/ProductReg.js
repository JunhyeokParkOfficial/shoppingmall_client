import MypageLayout from "../../components/MypageLayout/MypageLayout";
import { useState } from "react";
import { categories } from "../../constants/categories";
import { requestRegisterProduct, requestUploadImage } from "../../services";
import { PAGE_URL } from "../../constants/urls";
import { DetailTextarea, NameInput, PriceInput, ProductRegButton, ProductRegTable, ProductRegTd } from "./ProductReg.style";

const ProductReg = () => {
    const [name,setName] = useState();
    const [price,setPrice] = useState(0);
    const [detail,setDetail] = useState();
    const [image,setImage] = useState();
    const [category, setCategory] = useState();

    const onImageHandler = async (event) => {
        const image = event.target.files[0];   
        const res = await requestUploadImage(image);
        setImage(res);
    }

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handlePriceChange = (e) => {
        let value = e.target.value;
        value = Number(value.replaceAll(',', ''));
        setPrice(value);
        const formatValue = value.toLocaleString('ko-KR');
        e.target.value = formatValue;
    }

    const onRegClick = async () => {
        const isSuccess = await requestRegisterProduct(name, price, detail, category, image);
        if(isSuccess) window.location.href = PAGE_URL.MYPAGE_PRODUCT; 
    }
    return (
        <MypageLayout title='상품 등록'>
            <div style={{margin:"auto"}}>
                    <ProductRegTable>
                        <tr>
                            <ProductRegTd>상품명</ProductRegTd>
                            <ProductRegTd><NameInput onChange={(e)=>setName(e.target.value)} type="text"/></ProductRegTd>
                        </tr>
                        <tr>
                            <ProductRegTd>가격</ProductRegTd>
                            <ProductRegTd><PriceInput onChange={(e)=>handlePriceChange(e)} type="text" defaultValue={0}/> 원</ProductRegTd>
                        </tr>
                        <tr>
                            <ProductRegTd>세부사항</ProductRegTd>
                            <ProductRegTd><DetailTextarea onChange={(e)=>setDetail(e.target.value)}/></ProductRegTd>
                        </tr>
                        <tr>
                            <ProductRegTd>카테고리</ProductRegTd>
                            <ProductRegTd>
                                <select onChange={handleCategory}>
                                    <option disabled selected>카테고리를 선택해주세요.</option>
                                    {Object.keys(categories).map((key)=>{
                                        return (
                                            <option value={key}>{categories[key]}</option>
                                        )
                                    })}
                                </select>
                            </ProductRegTd>
                        </tr>
                        <tr>
                            <ProductRegTd>상품 이미지</ProductRegTd>
                            <ProductRegTd><input onChange={onImageHandler} type="file"/></ProductRegTd>
                        </tr>
                    </ProductRegTable>
                    <ProductRegButton onClick={onRegClick}>상품 등록하기</ProductRegButton>
            </div>
        </MypageLayout>
    )
}

export default ProductReg;