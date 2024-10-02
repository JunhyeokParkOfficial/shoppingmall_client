import { useState } from "react";
import AdminMenu from "./AdminMenu";
import { categories } from "../../constants/categories";
import { requestRegisterProduct, requestUploadImage } from "../../services";
import { PAGE_URL } from "../../constants/urls";

const ProductReg = () =>{
    const [name,setName] = useState();
    const [price,setPrice] = useState();
    const [detail,setDetail] = useState();
    const [stock, setStock] = useState();
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
    const onRegClick = async () => {
        const isSuccess = await requestRegisterProduct(name, price, detail, category, stock, image);
        if(isSuccess) window.location.href = PAGE_URL.PRODUCT_MANAGE; 
    }
    return (
        <>
            <AdminMenu menu={"product_manage"}/>
            <div style={{float:"right",width:"75%",marginBottom:"120px",marginTop:"50px"}}>
                <h2>상품등록</h2>
                <div style={{margin:"auto"}}>
                    <table className="product_register_table">
                        <tr>
                            <td>상품명</td>
                            <td><input onChange={(e)=>setName(e.target.value)} type="text"/></td>
                        </tr>
                        <tr>
                            <td>가격</td>
                            <td><input onChange={(e)=>setPrice(e.target.value)} type="text"/></td>
                        </tr>
                        <tr>
                            <td>세부사항</td>
                            <td><textarea style={{width:"500px",height:"350px"}} onChange={(e)=>setDetail(e.target.value)}></textarea></td>
                        </tr>
                        <tr>
                            <td>카테고리</td>
                            <td>
                                <select onChange={handleCategory}>
                                    <option disabled selected>카테고리를 선택해주세요.</option>
                                    {Object.keys(categories).map((key)=>{
                                        return (
                                            <option value={key}>{categories[key]}</option>
                                        )
                                    })}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>수량</td>
                            <td><input onChange={(e)=>setStock(e.target.value)} type="text"/></td>
                        </tr>
                        <tr>
                            <td>상품 이미지</td>
                            <td><input ons={onImageHandler} type="file"/></td>
                        </tr>
                    </table>
                    <div className="product_register_btns">
                        <button className="product_register_btn" onClick={onRegClick}>상품 등록하기</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductReg;