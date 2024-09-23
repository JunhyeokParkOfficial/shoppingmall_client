import { useEffect, useState } from "react";
import AdminOrder from "../AdminOrder";
import AdminMenu from "../AdminMenu";
import { useParams } from "react-router-dom";
import { Axios } from "../../../utils/CustomAxios";
import { OrderPaging } from "../AdminPaging";
import { AdminContentContainer, AdminContentTitle, OrderManageLargeTH, OrderManageSmallTH, OrderManageTable, OrderManageTH, OrderManageTopTR } from "./OrderManage.style";

const OrderManage = () =>{
    const {id} = useParams();
    const [loading,setLoading] = useState(false);
    const [data,setData] = useState([]);
    const getData = () =>{
        const uri = `/api/v1/admin/orders?page=${id-1}&size=10`;
        Axios.get(uri)
        .then((res)=>{
            setData(res.data.content);
            setLoading(true);
        });
    }
    
    useEffect(()=>{
        getData();
    },[])


    return (
        <div>
            <AdminMenu/>
            <AdminContentContainer>
            <AdminContentTitle>주문 관리</AdminContentTitle>
            <OrderManageTable>
                <OrderManageTopTR>
                    <OrderManageLargeTH>회원명</OrderManageLargeTH>
                    <OrderManageLargeTH>주문일</OrderManageLargeTH>
                    <OrderManageLargeTH>주문금액</OrderManageLargeTH>
                    <OrderManageSmallTH>진행상태</OrderManageSmallTH>
                    <OrderManageSmallTH></OrderManageSmallTH>
                </OrderManageTopTR>
                {!loading?<></>:data.map((data)=>{
                    return(
                        <AdminOrder data={data} getData={getData}/>
                    )
                    
                })}
                <OrderPaging page={id}/>
            </OrderManageTable>
            </AdminContentContainer>
        </div>
    )
}

export default OrderManage;