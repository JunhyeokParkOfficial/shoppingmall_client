import MypageBar from "../../components/MyPageMenu/MypageMenu";
import MypageLayout from "../../components/MypageLayout/MypageLayout";
import { useEffect, useState } from "react";
import PhoneNumber from "../../components/PhoneNumber";
import { useNavigate } from "react-router-dom";
import { queryMyInfo } from "../../services";
import { MyInfoContainer, MypageContainer } from "./MyInfo.style";

const Info = () => {
    const [data,setData] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState("");
    const [newPW1,setNewPW1] = useState("");
    const [newPW2,setNewPW2] = useState("");
    
    const getInfo = async() =>{
        queryMyInfo()
            .then((data)=>{
                setPhoneNumber(data.phone);
                setData(data);
            })
    }

    useEffect(()=>{
        getInfo(); 
    },[])


    const PNCheck = () =>{
        const RegExp = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;
        return true;
    }

    const PWCheck = () => {
        let RegExp =  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{10,}$/;
        if(RegExp.test(newPW1))return true;
        else return false;
    }
    
    const saveClick = () => {
        if(!PNCheck())alert("휴대전화 번호를 정확하게 입력하세요");
        else if(!PWCheck()||(newPW1!==newPW2))alert("비밀번호를 정확하게 입력하세요");
        else if(PNCheck()&&PWCheck()&&(newPW1===newPW2)){
            let putData;
            putData = {
                "address": data.address,
                "email": data.email,
                "name": data.name,
                "password": newPW1,
            }
        }
    }
    return (
        <MypageLayout title='개인정보관리'>
                <div className="info_form">
                    <table>
                        <tbody>
                            <tr>
                                <th>이메일</th>
                                <td>{data.email}</td>
                            </tr>
                            <tr>
                                    <th>이름</th>
                                    <td>{data.name}</td>
                            </tr>
                            <tr>
                                    <th>휴대전화</th>
                                    <td>
                                       <PhoneNumber phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber}/>
                                    </td>
                            </tr>
                            <tr>
                                    <th>새 비밀번호</th>
                                    <td><input onChange={(e)=>setNewPW1(e.target.value)}value={newPW1} type="password" placeholder="특수문자 포함 10자리 이상"/></td>
                            </tr>
                            <tr>
                                    <th>새 비밀번호 확인</th>
                                    <td><input onChange={(e)=>setNewPW2(e.target.value)} value={newPW2} type="password" placeholder="비밀번호 확인"/></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="info_btn_wrap">
                        <div><a href="/mypage">취소</a></div>
                        <div onClick={saveClick} style={{color:"white", backgroundColor:"black"}}>저장</div>
                    </div>
                </div>
        </MypageLayout>    
    )
}

export default Info;