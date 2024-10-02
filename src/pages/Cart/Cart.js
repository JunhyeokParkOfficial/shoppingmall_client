import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Axios } from "../../utils/CustomAxios";
import CartItem from "../../components/CartItem/CartItem";
import { queryCartItems } from "../../services/cart";
import { CartContainer, CartTableContainer, CartTd, CartTh, CartTH, CartTopTr, DeleteAllButton, EmptyCartDiv, TitleBox, TitleContainer } from "./Cart.style";

const Cart = () =>{
    const [data,setData] = useState([]);
    const [list,setList] = useState(new Set());
        
    useEffect(async ()=>{
        const items = await queryCartItems();
        setData(items);
    },[])

    const ontopCheck = (e) => {
            const checkboxes = document.querySelectorAll('.cart_checkbox');
            checkboxes.forEach((checkbox) => {
              checkbox.checked = e.target.checked;
            })
            if(e.target.checked)data.forEach((data)=>{
                list.add(data.id);
                setList(list);
            })    
            else {
                list.clear();
                setList(list);
            }
    }
    
    const checkedItemHandler = (id, isChecked) => {
        if (isChecked) {
          list.add(id);
          setList(list);
          if(list.size===data.length){
            const checkboxes = document.querySelector('.cart_topcheckbox');
            checkboxes.checked=true;
          }
        } else if (!isChecked && list.has(id)) {
          list.delete(id);
          setList(list);
          if(list.size!==data.length){
            const checkboxes = document.querySelector('.cart_topcheckbox');
            checkboxes.checked=false;
          }
        }
      };

    return (
        <CartContainer>
            <TitleContainer>
                <TitleBox>장바구니</TitleBox>
            </TitleContainer>
            <DeleteAllButton>선택 삭제</DeleteAllButton>
            <CartTableContainer>
                <CartTopTr>
                    <CartTh style={{width: "45px"}}>
                        <span><input onChange={ontopCheck}className="cart_topcheckbox"type="checkbox"/></span>
                    </CartTh>
                    <CartTh style={{width:"480px"}}>상품 정보</CartTh>
                    <CartTh style={{width: "200px"}}className="cart_table_top_cell">가격</CartTh>
                    <CartTh style={{width: "150px"}}className="cart_table_top_cell">판매 상태</CartTh>
                    <CartTh style={{width: "15%"}}className="cart_table_top_cell"/>
                </CartTopTr>
                {data.length == 0?
                <EmptyCartDiv>
                    현재 장바구니에 상품이 없습니다.  
                </EmptyCartDiv>  
                :
                data.map((data)=>{
                    return(
                        <CartItem data={data} checkedItemHandler={checkedItemHandler}/>
                    )
                    
                })}
            </CartTableContainer>
        </CartContainer>
    )
}

export default Cart;