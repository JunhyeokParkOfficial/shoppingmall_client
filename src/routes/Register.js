import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () =>{
  const [PW,setPW] = useState("");
  const [PW2,setPW2] = useState("");
  const [name,setName] = useState("");
  const [PN1,setPN1] = useState("");
  const [PN2,setPN2] = useState("");
  const [PN3,setPN3] = useState("");
  const [Email,setEmail] = useState("");
  const [address,setAddress] = useState("");
  const navigate = useNavigate();
  const onEmailBlur = (event) => {
    const RegExp = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    if(RegExp.test(event.target.value)){
      document.querySelector(".id_guide").classList.add("hidden");
      setEmail(event.target.value);
    }
    else{
        document.querySelector(".id_guide").classList.remove("hidden");
        setEmail("");
    }
  }
  const onEmailHandler = (event) => {
    setEmail(event.target.value);
  }
  const EmailCheck = () => {
    const RegExp = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    if(RegExp.test(Email)) return true;
    else return false;
  }

  const onPWHandler = (event) => {
    setPW(event.target.value);
  }

  const PWCheck = () => {
    let RegExp =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{10,}$/;
    if(RegExp.test(PW))return true;
    else return false;
  }

  const onPW2Blur = (event) => {
    setPW2(event.target.value);
    if(event.target.value!==PW){
      document.querySelector(".pw_check_guide").classList.remove("hidden");
    }
    else {
      document.querySelector(".pw_check_guide").classList.add("hidden");
    }
  }
  
  const onNameHandler = (event) =>{
    setName(event.target.value);
  }
  const nameCheck = () => {
    const RegExp = /^[가-희]{1,100}$/;
    if(RegExp.test(name))return true;
    else return false;
  }

  const onPNHandler = (event) =>{
      setPN1(document.querySelector(".first_num").value);
      setPN2(document.querySelector(".second_num").value);
      setPN3(document.querySelector(".third_num").value);
  }

  const PNCheck = () =>{
    if(PN1===""&&PN2===""&&PN3===""){
      return true;
    }
    const RegExp1 = /^[0-9]{3}$/;
    const RegExp2 = /^[0-9]{3,4}$/;
    const RegExp3 = /^[0-9]{4}$/;
    if(RegExp1.test(PN1)&&RegExp2.test(PN2)&&RegExp3.test(PN3)){
      return true;
    }
    else return false
  }
  const onAddressHandler = (event) => {
    setAddress(event.target.value);
  }
  const addressCheck = () =>{
    if(address==="")return true;
    const RegExp = /^[가-희]{1,}$/;
    if(RegExp.test(address))return true;
    else return false;
  }

  const requestReg = (data) =>{
    const uri = "http://localhost:3001/member_new";
    axios.post(uri, data).then(response => response.data).then((res) => {
      console.log(res);
      if(res.status=== 500) {
        alert("이미 가입된 이메일입니다");
      }
      else if(res.data.code === 400) {
        alert("회원정보를 입력하세요");
      }
    });
  }
  const onRegClick = () => {
    console.log("Clicked!!!");
    if(!EmailCheck())alert("이메일을 확인해주십시오");
    if(!PWCheck())alert("비밀번호를 확인해주십시오");
    if(PW!==PW2)alert("비밀번호가 일치하지 않습니다");
    if(!nameCheck())alert("이름을 확인해주십시오");
    if(!PNCheck())alert("휴대전화번호를 확인해주십시오");
    //if(!addressCheck())alert("주소를 확인해주십시오");
    if(EmailCheck()&&PWCheck()&&(PW===PW2)&&nameCheck()&&PNCheck){
      let data;
      if(PN1===""&&PN2===""&&PN3===""&&address===""){
        data = {email:Email,name:name,password:PW};
        console.log("good!! but PN & address are gone;;");
      }
      else if(PN1===""&&PN2===""&&PN3===""){
        data = {address:address,email:Email,name:name,password:PW};
        console.log("good!! but PN is gone;;");
      }
      else if(address===""){
        data = {email:Email,name:name,password:PW,phone_number:`${PN1}-${PN2}-${PN3}`};
        console.log("good!! but address is gone;;");
      }
      else {
        data = {address:address,email:Email,name:name,password:PW,phone_number:`${PN1}-${PN2}-${PN3}`};
        console.log("good!!");
      }
      requestReg(data);
      alert("가입되었습니다");
      navigate("/");
    }
  }
    return (
        <div id="container">
            <div id="reg_contents">
                <div className="titleArea"><h2>회원 가입</h2></div>
                <form>
                    <div id='joinForm'>
                        <table className="tg">
                            <colgroup>
                            <col style={{width:"180px"}}/>
                            <col style={{width:"auto"}}/>
                            </colgroup>
                            <tbody>
                                <tr>
                                  <th className="tg-0lax">* 이메일</th>
                                  <td className="tg-0lax">
                                    <input className="ID_input"onChange={onEmailHandler} onBlur={onEmailBlur} type="text"/>
                                    <p className='text_guide'>
                                    <span className='hidden id_guide'>이메일을 정확하게 입력해 주세요.</span>
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <th className="tg-0lax">* 비밀번호</th>
                                  <td className="tg-0lax">
                                    <input className="PW_input"onChange={onPWHandler} type="password"/>
                                    <p className='text_guide'>
                                      특수문자 포함 10자리 이상
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <th className="tg-0lax">* 비밀번호 확인</th>
                                  <td className="tg-0lax">
                                    <input className="PW_input" onBlur={onPW2Blur}type="password"/>
                                    <p className='text_guide'>
                                    <span className='hidden pw_check_guide'>비밀번호가 일치하지 않습니다</span>  
                                    </p>
                                  </td>
                                </tr>
                                <tr>
                                  <th className="tg-0lax">* 이름</th>
                                  <td className="tg-0lax"><input  onChange={onNameHandler} className='name_input'type="text"/></td>
                                </tr>
                                <tr>
                                  <th className="tg-0lax">휴대전화</th>
                                  <td className="tg-0lax">
                                    <input className="phone_input first_num" maxLength="3" onChange={onPNHandler} type="text"/>-
                                    <input style={{marginLeft:"10px"}} className="phone_input second_num" maxLength="4" onChange={onPNHandler} type="text"/>-
                                    <input style={{marginLeft:"10px"}} className="phone_input third_num" maxLength="4"onChange={onPNHandler} type="text"/>
                                  </td>
                                </tr>
                                <tr>
                                  <th className="tg-0lax">주소</th>
                                  <td className="tg-0lax"><input className="address_input" onChange={onAddressHandler} type="text"/></td>
                                </tr>
                                
                          </tbody>
                        </table>
                        <div className='reg_btn' onClick={onRegClick}>
                          <a className='btn_text'>가입하기</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;