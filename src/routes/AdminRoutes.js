import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { PAGE_URL } from "../constants/urls";

const AdminRoutes = () => {
    const user = useSelector(state => state.user);
  
    return user.isLoggedIn ? <Outlet/> : <Navigate to={PAGE_URL.LOGIN}/>;
};
  
export default AdminRoutes;