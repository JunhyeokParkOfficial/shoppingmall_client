import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { requestAdminLogin } from "../../services";
import { PAGE_URL } from "../../constants/urls";
import { login_success_admin } from "../../store/authReducer";

export const useAdminLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async (req) => {
        try{
            const res = await requestAdminLogin(req);
            
            dispatch(login_success_admin(res));
            localStorage.setItem("access_token",res.accessToken);
            console.log(res);
            alert("관리자계정으로 로그인합니다");
            navigate(PAGE_URL.ADMIN);
    
        } catch (err) {
            alert("비밀번호가 일치하지 않습니다");
            console.log(err);       
        }
    }

    return login;
}