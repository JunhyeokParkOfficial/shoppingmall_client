import { useEffect, useState } from "react";
import Order from "../../components/Order";
import MypageBar from "../../components/MyPageMenu/MypageMenu";
import { useParams } from "react-router-dom";
import { MyOrderPaging } from "../Paging";
import { Axios } from "../../utils/CustomAxios";
import { MyOrderContainer, MypageContainer } from "./MyOrder.style";

const MyOrder = () =>{
    const {id} = useParams();
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);
    const getData = () =>{
        const uri = `/api/v1/member/order?page=${id-1}`;
        Axios.get(uri)
        .then((res)=>{setData(res.data.content);setLoading(true);})
        .catch((e)=>console.log(e));
    }

    useEffect(()=>{
        getData();      
    },[])


    return (
        <MypageContainer>
            <MypageBar/>
            <MyOrderContainer>
            <h1>주문/배송조회</h1>
            <div className="cart_table">
                <div className="cart_table_top">
                    <div style={{width: "25%"}}className="cart_table_top_cell">주문일자</div>
                    <div style={{width: "30%"}}className="cart_table_top_cell">상품정보</div>
                    <div style={{width: "15%"}}className="cart_table_top_cell">주문금액</div>
                    <div style={{width: "15%"}}className="cart_table_top_cell">진행상태</div>
                    <div style={{width: "15%"}}className="cart_table_top_cell"></div>
                </div>
                {!loading?<></>:data.map((data)=>{
                    return(
                        <Order data={data} getData={getData}/>
                    )
                    
                })}
                <MyOrderPaging page={id}/>
            </div>
        </MyOrderContainer>
        </MypageContainer>
    )
}

export default MyOrder;