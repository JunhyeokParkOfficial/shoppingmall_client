import { CurrentPageButton, PageButton, PagenationBox } from "./Pagenation.style";
import pageLeft from "../../assets/pageLeft.png";
import pageRight from "../../assets/pageRight.png";

const Pagenation = ({currentPage, totalPage, onPageChange}) => {

    let pagesLeft = [], pagesRight = [];
    const start = Math.floor((currentPage - 1) / 5) * 5 + 1;
    const end = start + 4 < totalPage ? start + 4 : totalPage;
    for(let i=start;i<currentPage;i++){
        pagesLeft.push(i);
    }

    for(let i=currentPage+1;i<=end;i++){
        pagesRight.push(i);
    }

    const handlePreviousPage = () => {
        if(currentPage > 1) {
            onPageChange(currentPage-1);
        }
    } 
    
    const handleNextPage = () => {
        if(currentPage < totalPage) onPageChange(currentPage+1);//window.location.href = url(category, sort, currentPage+1);
    } 

    const handlePageClick = (page) => {
        onPageChange(page);
    };

    return (
        <PagenationBox>
            <PageButton onClick={handlePreviousPage}><img src={pageLeft}/></PageButton>
            {
               pagesLeft.map((page)=>{
                    return (
                        <PageButton onClick={()=>handlePageClick(page)}>{page}</PageButton>
                    )
               }) 
            }
            <CurrentPageButton>{currentPage}</CurrentPageButton>
            {
               pagesRight.map((page)=>{
                    return (
                        <PageButton onClick={()=>handlePageClick(page)}>{page}</PageButton>
                    )
               }) 
            }
            <PageButton onClick={handleNextPage}><img src={pageRight}/></PageButton>
        </PagenationBox>
    )
}

export default Pagenation;