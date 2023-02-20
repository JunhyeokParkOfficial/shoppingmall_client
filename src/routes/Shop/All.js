import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Axios } from '../../CustomAxios';

const All = () =>{
    const [data,setData] = useState([]);
    const uri = "/product";

    //상품데이터 GET
    const getProduct =() =>{
      Axios.get(uri)
      .then((response)=>{
        return response.data.filter((product)=>product.item_status==="판매 중")}).then((data)=>setData(data));
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
                            <Link id="selected" to="/category/0">ALL</Link>
                        </li>
                        <li>
                            <Link to="/category/1">CATEGORY1</Link>
                        </li>
                        <li>
                            <Link to="/category/2">CATEGORY2</Link>
                        </li>
                        <li>
                            <Link to="/category/3">CATEGORY3</Link>
                        </li>
                    </ul>
                </div>
                <div className='product_list'>
                    <ul>
                        {data.map((data)=> {
                            const detailurl = `/detail/${data.id}`;
                            return (
                                <li>
                                <a className="product_list_a"href={detailurl}>
                                    <div>
                                    <img style={{width:"100%"}} src="https://thumbs.dreamstime.com/b/transparent-designer-must-have-fake-background-39672616.jpg"/>
                                    </div>
                                    <div>
                                        <div style={{float:"left"}}>{data.item_name}</div>
                                        <div style={{float:"right"}}>{data.price}원</div>
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

export default All;