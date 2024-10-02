import { useEffect, useState } from "react";

const PhoneNumber = ({phoneNumber, setPhoneNumber}) =>{
    const [first,setFirst] = useState([]);
    const [second,setSecond] = useState([]);
    const [third,setThird] = useState([]);

    useEffect(()=>{
        const parts = phoneNumber.split("-");
        setFirst(parts[0]);
        setSecond(parts[1]);
        setThird(parts[2]);
    },[phoneNumber])

    const handleChange = () => {
        const newPhoneNumber = `${first}-${second}-${third}`;
        setPhoneNumber(newPhoneNumber);
      };

    const styleObj1 = {
		border: "1px solid #ddd",
        width: "7%",
        lineHeight: "28px",
        height: "30px",
        marginRight: "5px"
    }

        return (
                <div>
                    <input onChange={(e)=>setFirst(e.target.value)} onBlur={handleChange} style={styleObj1} type="text" value={first}/>
                    <> - </>
                    <input onChange={(e)=>setSecond(e.target.value)} onBlur={handleChange} style={styleObj1} type="text" value={second}/>
                    <> - </> 
                    <input onChange={(e)=>setThird(e.target.value)} onBlur={handleChange} style={styleObj1} type="text" value={third}/>
                </div>
                )
}
export default PhoneNumber;