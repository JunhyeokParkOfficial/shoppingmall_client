import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Shop3 = () =>{
    const [data,setData] = useState([]);
    const uri = "http://localhost:3001/product";
    const getProduct =() =>{
      axios.get(uri)
      .then((response)=>{
        return response.data.filter((product)=>product.item_status==="판매 중"&&product.category==="CATEGORY3")}).then((data)=>setData(data));
    }
    useEffect(()=>{
        getProduct();
    },[]);
    return (
        <div className="product_container">
            <div className="product_content">
                <div className='category_list'>
                    <h2 className='category_title'>SHOP</h2>
                    <ul>
                        <li >
                            <Link to="/category/0">ALL</Link>
                        </li>
                        <li>
                            <Link to="/category/1">CATEGORY1</Link>
                        </li>
                        <li>
                            <Link to="/category/2">CATEGORY2</Link>
                        </li>
                        <li>
                            <Link id="selected" to="/category/3">CATEGORY3</Link>
                        </li>
                    </ul>
                </div>
                <div className='product_list'>
                    <ul>
                        {data.map((data)=> {
                            return (
                                <li>
                                <a>
                                    <div>
                                    <img style={{width:"100%"}} src="https://thumbs.dreamstime.com/b/transparent-designer-must-have-fake-background-39672616.jpg"/>
                                    </div>
                                    <div>
                                        <div>{data.item_name}</div>
                                        <div>상품 설명</div>
                                        <div>
                                            <div>{data.price}원</div>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Shop3;