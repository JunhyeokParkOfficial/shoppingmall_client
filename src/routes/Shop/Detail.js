import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
    const {id} = useParams();
    const [data,setData] = useState([]);
    const [count,setCount] = useState(0);
    //상품데이터 GET
    const getProduct =() =>{
        console.log(id);
        const uri = `http://localhost:3001/product/${id}`;
      axios.get(uri)
        .then((res)=>{setData(res.data);console.log(res.data)});
    }
    useEffect(()=>{
        getProduct();
    },[]);

    const onMinusClick = () => {
        if(count!==0)setCount(count-1);
    }
    const onPlusClick = () => {
        setCount(count+1);
    }
    return (
        <div className="detail_container">
            <div className="detail_ImageTitle">
            <div className="detail_image">
                <img style={{width:"100%"}} src="https://thumbs.dreamstime.com/b/transparent-designer-must-have-fake-background-39672616.jpg"/>
            </div>
            <div className="detail_title">
                <div className="detail_title_name">
                    {data.item_name}
                </div>
                <div className="detail_title_price">
                    <span className="detail_title_saleprice">판매가</span>
                    <span className="detail_title_pricedisplay">{data.price}원</span>
                </div>
                <div className="detail_title_countForm">
                    <div className="detail_title_countForm_text">수량</div>
                    <div>
                        <div className="detail_title_count"onClick={onMinusClick}>-</div>
                        <div className="detail_title_count">{count}</div>
                        <div className="detail_title_count"onClick={onPlusClick}>+</div>
                    </div>
                </div>
                <div className="detail_title_totalprice">
                    <h3 className="detail_title_totalprice_text">총 주문금액</h3>
                    <span className="detail_title_totalprice_price">{data.price*count}원</span>
                </div>
                <div className="detail_title_btns">
                    <div className="detail_title_btn" style={{float:"left", marginLeft:"70px"}}>장바구니</div>
                    <div className="detail_title_btn" style={{float:"right", backgroundColor:"black", color:"white"}}>바로 구매</div>
                </div>
            </div>
           
            </div>
            <div style={{marginTop:"100px"}}>
                <hr></hr>
                <div>상세정보</div>
                <div>{}</div>
            </div>
            
        </div>
    )
}

export default Detail;