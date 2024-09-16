import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login_success } from '../store/authReducer';
import { requestLogin } from '../services';
const Login = () =>{
    const [ID,setID] = useState("");
    const [PW,setPW] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const loginBtnClick = () =>{
        if(!ID){
            alert("아이디를 입력하십시오");
            return;
        }
        if (!PW){
            alert("비밀번호를 입력하십시오");
            return;
        }
        
        const data = {email:ID,password:PW};;
        requestLogin(data)
            .then((res)=>{
                dispatch(login_success(res));
                localStorage.setItem("access_token",res.accessToken);
                /*if(res.data.authority[0].authorityStatus==="ROLE_ADMIN"){
                    alert("관리자계정으로 로그인합니다");
                    navigate("/admin");
                }
                else {
                    navigate("/");
                }*/
                navigate("/");
            })
            .catch((err)=>{
                alert("비밀번호가 일치하지 않습니다");
                console.log(err);    
            })    
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
                                        <label><input id="member-id" type="text" onChange={(e)=>setID(e.target.value)}placeholder='회원 이메일'/></label>
                                    </li>
                                    <li>
                                        <label><input id="member-pw" type="password" onChange={(e) =>setPW(e.target.value)}placeholder='비밀번호'/></label>
                                    </li>
                                </ul>
                                <ul className='btn_login'>
                                    <li>
                                        <div onClick={loginBtnClick}><a>로그인하기</a></div>
                                    </li>
                                </ul>
                                <div className='btn_register'><a href='/register'>회원가입</a></div>
                                <div className='login_reset'>
                                    <div>비밀번호를 잊으셨나요?</div><a href='/reset'>비밀번호 재설정하기</a>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;