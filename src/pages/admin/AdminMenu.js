import { Link } from "react-router-dom"
import { PAGE_URL } from "../../constants/urls";

const AdminMenu = ({menu}) => {
    return (
            <div className='admin_category_list'>
                    <h2 className='category_title'>관리자 메뉴</h2>
                    <ul>
                        <li >
                            <Link to={PAGE_URL.ADMIN}>대시보드</Link>
                        </li>
                        <li>
                            <Link to={PAGE_URL.ORDER_MANAGE}>주문관리</Link>
                        </li>
                        <li>
                        <div className="product_manage">
                            <Link to={PAGE_URL.PRODUCT_MANAGE}>상품관리</Link>
                        </div>
                        </li>
                    </ul>
                </div>
    )
}

export default AdminMenu;