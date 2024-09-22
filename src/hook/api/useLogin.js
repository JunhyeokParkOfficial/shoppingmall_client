import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { requestLogin } from "../../services";
import { login_success } from "../../store/authReducer";
import { PAGE_URL } from "../../constants/urls";

export const useLogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = async (req) => {
        try{
            const res = await requestLogin(req);
            
            dispatch(login_success(res));
            localStorage.setItem("access_token",res.accessToken);
            console.log(res);
            navigate(PAGE_URL.HOME);
    
        } catch (err) {
            alert("비밀번호가 일치하지 않습니다");
            console.log(err);       
        }
    }

    return login;
}