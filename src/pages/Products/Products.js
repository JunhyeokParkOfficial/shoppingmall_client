import { useEffect, useState } from 'react';
import { getProductsByCategory } from '../../services/product';
import Pagenation from '../../components/pagenation/Pagination';
import { SortBox, SortOption, TitleAndSortContainer, TitleBox } from './Products.style';
import { sortOptions } from '../../constants/sortOptions';
import { categories } from '../../constants/categories';

const Pruducts = () =>{
    const [list,setList] = useState([]); 
    const [totalPage, setTotalPage] = useState();

    const params = new URLSearchParams(window.location.search);

    const currentPage = params.get("page") ? parseInt(params.get("page")) : 1;
    const category = params.get('category');
    const sort = params.get('sort') ? params.get('sort') : sortOptions.최신순;    

    const baseUrl = process.env.REACT_APP_S3_URL;

    const fetchData = async () => {
        try {
            const data = await getProductsByCategory(category, sort, currentPage);
            setList(data.list);
            setTotalPage(data.totalPage);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    const handlePageChange = (page) => {
        params.set('page', page);
        window.location.href = "?" + params;
        
    }

    const clickSortOption = (option) => {
        params.set('sort', sortOptions[option]);
        window.location.href = "?" + params;
    }

    return (
        <div className="product_container">
            <TitleAndSortContainer>
                <TitleBox>{categories[params.get('category')]}</TitleBox>
                <SortBox>
                    {
                        Object.keys(sortOptions).map((option)=>{
                            return <SortOption onClick={()=>clickSortOption(option)} isSelected={sort==sortOptions[option]}>{option}</SortOption>
                        })
                    }
                </SortBox>
            </TitleAndSortContainer>
            <div className='product_list'>
                <ul className='product_ul'>
                    {
                    list.map((data)=> {
                        const detailurl = `product/${data.id}`;
                        return (
                            <li>
                                <a className="product_list_a" href={detailurl}>
                                    <div>
                                        <img src={baseUrl+data.imageUrl}/>
                                    </div>
                                    <div className='product-simple-info'>
                                        <div id='simple-info-name'>{data.name}</div>
                                        <div id='simple-info-price'>{data.price.toLocaleString("ko-KR")}원</div>
                                    </div>
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <Pagenation currentPage={currentPage} totalPage={totalPage} onPageChange={handlePageChange}/>
        </div>
    )
}

export default Pruducts;