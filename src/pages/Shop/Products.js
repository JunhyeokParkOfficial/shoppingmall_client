import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { Axios } from '../../utils/CustomAxios';
import homeImage from '../../assets/homeImage.png';

const All = () =>{
    const {id} = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const [data,setData] = useState([]);
    
    useEffect(()=>{
        getProduct();
    },[])
    
    const categoryText = {
        book: '도서',
        ticket: '티켓/문구',
        clothing: '의류',
        shoes: '신발',
        accessary: '액세서리',
        digital: '디지털',
        food: '식품',
        beauty: '뷰티/미용'
    };

    const getProduct =async() =>{
        const uri = `/api/v1/item?page=${id-1}`;
        await Axios.get(uri)
        .then((response)=>{
            return response.data.content.filter((product)=>product.itemStatus==="FOR_SALE")
        })
        .then((data)=>setData(data));
    }
    return (
        <div className="product_container">
            <div id='title-box'>{categoryText[searchParams.get('category')]}</div>
            <div className='product_list'>
                <ul className='product_ul'>
                    {
                    data.map((data)=> {
                        const detailurl = `/detail/${data.id}`;
                        return (
                            <li>
                            <a className="product_list_a"href={detailurl}>
                                <div>
                                <img src={data.imageUrl}/>
                                </div>
                                <div>
                                    <div style={{float:"left"}}>{data.itemName}</div>
                                    <div style={{float:"right"}}>{data.price}원</div>
                                </div>
                            </a>
                        </li>
                        )
                    })}
                     <li>
                        <a className="product_list_a" href='product/1'>
                            <div>
                            <img src={homeImage}/>
                            </div>
                            <div className='product-simple-info'>
                                <div id='simple-info-name'>이름</div>
                                <div id='simple-info-price'>18000원</div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default All;