import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../css/Products.css';
import AdminProduct from "./AdminProduct";
import Product from "./AdminProduct";
const AdminProducts = () => {
   const [data,setData] = useState([]);
    const uri = "http://localhost:3001/product";
    const getProduct =() =>{
      axios.get(uri)
      .then((response)=>{
      setData(response.data);
      console.log(response.data);
      })
    }
    useEffect(()=>{
        getProduct();
    },[]);

    return (
      <div className="Product">
            <div style={{marginTop:"30px"}}>
            <button><Link to="/admin/product/register">상품 등록</Link></button>
            </div>
            <hr style={{width:"90%", float:"left"}}></hr>
            <div style={{textAlign:"center",marginTop:"50px",marginBottom:"50px"}}>
              <h3>상품 목록</h3>
            </div>
            <div className="product_table_container">
              <table className="product_table">
                <colgroup>
                </colgroup>
                <tbody>
                  <tr>  
                    <td></td>
                    <td className="">상품명</td>
                    <td className="">단가</td>
                    <td className="">재고</td>
                    <td className="">상품 상태</td>
                    <td></td>
                    <td></td>
                  </tr>
                    {data.map((product)=>
                      <AdminProduct product={product} getProduct={getProduct}/>
                    )}
                </tbody>
              </table>
            </div> 
        </div>
    )
}

export default AdminProducts;