import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductReg = () =>{
    const [name,setName] = useState("");
    const [price,setPrice] = useState();
    const [stock, setStock] = useState();
    const [status,setStatus] = useState("");
    const [category,setCategory] = useState("CATEGORY1");
    const onNameHandler =(event)=>{
        setName(event.target.value);
    }
    const onPriceHandler =(event)=>{
        setPrice(event.target.value);
    }
    const onStockHandler =(event)=>{
        setStock(event.target.value);
    }
    const onStatusHandler =(event)=>{
        setStatus(event.target.value);
    }
    const onCategoryHandler = (event) => {
        setCategory(event.target.value);
    }
    const onRegClick = async () => {
        const uri = "http://localhost:3001/product";
        const data = {
            "item_name": name,
            "item_status": status,
            "price": price,
            "stock": stock,
            "category":category
        }
        await axios.post(uri,data);
    }
    return (
        <div>
            <h2>상품등록</h2>
            <div style={{width:"70%"}}>
                <table>
                    <tr>
                        <td>상품명</td>
                        <td><input onChange={onNameHandler}type="text"/></td>
                    </tr>
                    <tr>
                        <td>가격</td>
                        <td><input onChange={onPriceHandler} type="text"/></td>
                    </tr>
                    <tr>
                        <td>세부사항</td>
                        <td><input type="text"/></td>
                    </tr>
                    <tr>
                        <td>재고</td>
                        <td><input onChange={onStockHandler} type="text"/></td>
                    </tr>
                    <tr>
                        <td>상품 상태</td>
                        <td><input onChange={onStatusHandler} type="text"/></td>
                    </tr>
                    <tr>
                        <td>상품 카테고리</td>
                        <td><select onChange={onCategoryHandler}>
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