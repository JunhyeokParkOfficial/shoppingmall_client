import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from '../../services/product';
import Pagenation from '../../components/pagenation/Pagination';
import { PAGE_URL } from '../../constants/urls';
import { SortBox, SortOption, TitleAndSortContainer, TitleBox } from './Products.style';
import { sortOptions } from '../../constants/sortOptions';
import { categories } from '../../constants/categories';

const Pruducts = () =>{
    const [searchParams, setSearchParams] = useSearchParams();
    const [list,setList] = useState([]); 
    const [totalPage, setTotalPage] = useState();

    const currentPage = searchParams.get("page") ? parseInt(searchParams.get("page")) : 1;
    const category = searchParams.get('category');
    const sort = searchParams.get('sort') ? searchParams.get('sort') : sortOptions.최신순;    

    const fetchData = async () => {
        try {
            const data = await getProducts(category, sort, currentPage);
            setList(data.list);
            setTotalPage(data.totalPage);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    const clickSortOption = (option) => {
        window.location.href = `${PAGE_URL.PRODUCT}?category=${category}&sort=${sortOptions[option]}`;
    }

    return (
        <div className="product_container">
            <TitleAndSortContainer>
                <TitleBox>{categories[searchParams.get('category')]}</TitleBox>
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
                                        <img src={data.url}/>
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
            <Pagenation currentPage={currentPage} totalPage={totalPage} category={category} sort={sort} url={PAGE_URL.PRODUCT_PAGENATION}/>
        </div>
    )
}

export default Pruducts;