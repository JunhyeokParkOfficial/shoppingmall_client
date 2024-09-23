import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import AdminMenu from "../AdminMenu";
import AdminProduct from "../AdminProduct";
import { AdminContentContainer, AdminContentTitle } from "../orderManage/OrderManage.style";
import { getProducts } from "../../../services";
import { Container, Title } from "./ProductManage.style";
import Pagenation from "../../../components/pagenation/Pagination";

const ProductManage = () => {

  const navigate = useNavigate();
  const [list,setList] = useState([]);
  const [totalPage, setTotalPage] = useState();

  const params = new URLSearchParams(window.location.search);

  const currentPage = params.get("page") ? parseInt(params.get("page")) : 1;
   
  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async () =>{
    const data = await getProducts(currentPage);
    setList(data.list);
    console.log(data.list);
    setTotalPage(data.totalPage);
  }
    
  const onRegisterClick = () => {
    navigate("/admin/product/register");
  }

  const handlePageChange = (page) => {
    params.set('page', page);
    window.location.href = "?" + params;
  }
  
  return (
    <>
      <AdminMenu menu={"상품관리"}/>
        <Container>
          <Title>상품 관리</Title>
          <div style={{marginTop:"30px"}}>
            <button onClick={onRegisterClick}>상품 등록</button>
          </div>
          <hr style={{width:"100%", float:"left"}}></hr>
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
                      <AdminProduct product={product} fetchData={fetchData}/>
                    )}
                </tbody>
              </table>
            </div> 
            <Pagenation currentPage={currentPage} totalPage={totalPage} onPageChange={handlePageChange}/>
          </Container>
      </>
    )
}

export default ProductManage;