import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Axios } from '../../CustomAxios';
import Paging from '../paging';

const All = () =>{
    
    const [data,setData] = useState([]);
    const [currentPosts, setCurrentPosts] = useState([]) //보여줄 포스트
    const [page, setPage] = useState(1) //현재 페이지
    const handlePageChange = (page) => { setPage(page) }
    const [postPerPage] = useState(3); //페이지당 포스트 개수
    const indexOfLastPost = page * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage
    
    useEffect(()=>{
        getProduct();
    },[])
    useEffect(() => {
        setCurrentPosts(data.slice(indexOfFirstPost, indexOfLastPost));
    }, [data,page]);
    
    //상품데이터 GET
    const getProduct =async() =>{
        const uri = "/product";
        await Axios.get(uri)
        .then((response)=>{
            return response.data.filter((product)=>product.itemStatus==="판매 중")
        })
        .then((data)=>setData(data));
    }
    return (
        <div className="product_container">
            <div className="product_content">
                <div className='category_list'>
                    <h2 className='category_title'>SHOP</h2>
                    <ul>
                        <li >
                            <a id="selected" href="/category/0">ALL</a>
                        </li>
                        <li>
                            <a href="/category/1">CATEGORY1</a>
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
                    <ul className='product_ul'>
                        {
                        currentPosts.map((data)=> {
                            console.log(data);
                            const detailurl = `/detail/${data.id}`;
                            return (
                                <li>
                                <a className="product_list_a"href={detailurl}>
                                    <div>
                                    <img style={{width:"100%"}} src="https://thumbs.dreamstime.com/b/transparent-designer-must-have-fake-background-39672616.jpg"/>
                                    </div>
                                    <div>
                                        <div style={{float:"left"}}>{data.itemName}</div>
                                        <div style={{float:"right"}}>{data.price}원</div>
                                    </div>
                                </a>
                            </li>
                            )
                        })}
                    </ul>
                    <Paging totalCount={data.length} page={page} postPerPage={postPerPage} pageRangeDisplayed={5} 
              handlePageChange={handlePageChange} />    
                </div>
            </div>
        </div>
    )
}

export default All;