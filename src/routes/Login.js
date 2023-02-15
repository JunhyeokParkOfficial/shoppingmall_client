import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Login.css'
import {setCookie} from 'react-cookie';
const Login = ({setLogin:setLogin,setAdmin:setAdmin,setEmail:setEmail}) =>{
    const [ID,setID] = useState("");
    const [PW,setPW] = useState("");
    const navigate = useNavigate();
    const IDHandler = (event) =>{
        setID(event.target.value);
    }
    const PWHandler = (event) =>{
        setPW(event.target.value);
    }
    const loginBtnClick = () =>{
        const uri = "http://localhost:3001/member_login";
        const data = {ID:ID,password:PW};
        
        if(ID==="admin1234"&&PW==="admin1234"){
            alert("관리자 계정으로 로그인합니다");
            localStorage.setItem("admin","true");
            console.log("admin login!");
            setAdmin(true);
            navigate("/admin/dashboard");
        }
        else {
            localStorage.setItem('username',ID);
            setLogin(true);
            setEmail(ID);
            console.log("login!!!");
            navigate("/");
        }
        /*axios.post(uri, data).then(response => response.data).then((res)=>{
            if(res.msg==="인증이 실패하였습니다."){
                alert("아이디와 비밀번호를 확인하세요");
            }
            else {
                localStorage.setItem('refreshToken',res.refreshToken);
                setCookie('accessToken',res.accessToken);
                setCookie('username',ID);
                setLogin(true);
                setEmail(ID);
                console.log("login!!!");
                navigate("/");
            }
        }
        )*/
        
    }
    return (
        <div id="container">
            <div id="content">
                <form>
                    <div className="login">
                        <div id='login'>
                            <h3 id='login-title'>로그인</h3>
                            <fieldset>
                                <ul className='form'>
                                    <li>
                                        <label><input id="member-id" type="text" onChange={IDHandler}placeholder='회원 이메일'/></label>
                                    </li>
                                    <li>
                                        <label><input id="member-pw" type="password" onChange={PWHandler}placeholder='비밀번호'/></label>
                                    </li>
                                </ul>
                                <ul className='btn_login'>
                                    <li>
                                        <div onClick={loginBtnClick}><a>로그인하기</a></div>
                                    </li>
                                </ul>
                                <div className='btn_register'><a href='/register'>회원가입</a></div>
                            </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;