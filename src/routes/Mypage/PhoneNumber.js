import { useEffect, useState } from "react";

const PhoneNumber = ({data,a,b,c,setA,setB,setC}) =>{
    const styleObj1 = {
		border: "1px solid #ddd",
        width: "7%",
        lineHeight: "28px",
        height: "30px",
        marginRight: "5px"
    }
    useEffect(()=>{
        
    },[])

    const onAHandler = (event) => {
        setA(event.target.value);
    }
    const onBHandler = (event) => {
        setB(event.target.value);
    }
    const onCHandler = (event) => {
        setC(event.target.value);
    }
        return (
                <div>
                    <input onChange={onAHandler} style={styleObj1} type="text" value={a}/>
                    <> - </>
                    <input onChange={onBHandler} style={styleObj1} type="text" value={b}/>
                    <> - </> 
                    <input onChange={onCHandler} style={styleObj1} type="text" value={c}/>
                </div>
                )
}
export default PhoneNumber;