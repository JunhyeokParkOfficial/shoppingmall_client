import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Axios } from "../../CustomAxios";

const ProductReg = () =>{
    const [name,setName] = useState("");
    const [price,setPrice] = useState();
    const [stock, setStock] = useState();
    const [status,setStatus] = useState("");
    const [category,setCategory] = useState("CATEGORY1");

    const navigate = useNavigate();

    //등록버튼 클릭
    const onRegClick = async () => {
        const uri = "/product";
        const data = {
            "item_name": name,
            "item_status": status,
            "price": price,
            "stock": stock,
            "category":category  
        }
        //유효성 검사 필요
        await Axios.post(uri,data)
        .then(()=>
            {navigate("/admin/product");}
        )
        .catch();
        
    }
    return (
        <div>
            <h2>상품등록</h2>
            <div style={{width:"70%"}}>
                <table>
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
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>재고</td>
                        <td><input onChange={(e)=>setStock(e.target.value)} type="text"/></td>
                    </tr>
                    <tr>
                        <td>상품 상태</td>
                        <td>
                            <select onChange={(e)=>setStatus(e.target.value)}>
                                <option value="판매 중">판매 중</option>
                                <option value="품절">품절</option>
                            </select>
                        </td>
                        <td>
                            <select onChange={(e)=>setCategory(e.target.value)}>
                                <option value="CATEGORY1">CATEGORY1</option>
                                <option value="CATEGORY2">CATEGORY2</option>
                                <option value="CATEGORY3">CATEGORY3</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>상품 카테고리</td>
                        <td><select onChange={(e)=>setCategory(e.target.value)}>
                                <option value="CATEGORY1">CATEGORY1</option>
                                <option value="CATEGORY2">CATEGORY2</option>
                                <option value="CATEGORY3">CATEGORY3</option>
                            </select></td>
                    </tr>
                    <tr>
                        <td>상품 이미지</td>
                        <td><input type="file"/></td>
                    </tr>
                </table>
                <div onClick={onRegClick}>
                    <a href="/admin/product">상품 등록하기</a>
                </div>
            </div>
        </div>
    )
}

export default ProductReg;