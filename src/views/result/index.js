import "./index.css"
import axios from "axios";
import { useState,useEffect } from "react";

function Result(){
    const [msg,setMsg] = useState('');

    useEffect(()=>{
        axios.post("/api/getData",{
           
          }).then((res)=>{
             setMsg(res.data.data)
          }).catch((res)=>{
            setMsg("error data")
          })
    },[])

    return (
    <div className="result-main">
        {msg}
    </div>
    )
}
export default Result;