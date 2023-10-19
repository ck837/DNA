import "./index.css"
import axios from "axios";
import { useState,useEffect } from "react";

function Result(){
    const [table,setTable] = useState([
      { col1: 0,col2:'no data'}
  ]);
    const [value,setValue] = useState(0.9972732);

    useEffect(()=>{
        axios.post("/api/getData",{
           
          }).then((res)=>{
             setTable(res.data.data);
             setValue(res.data.data);
          }).catch((res)=>{
            // setMsg("error data")
          })
    },[])


    return (
      <div className="result-main">
        <p className="table-text">当前模型的AUC值为&nbsp;<strong>{value}</strong></p>
        <table id="myTable" className="table-main">
          <thead>
            <tr>
              <th>碱基下标</th>
              <th>预测的碱基对</th>
            </tr>
          </thead>
          <tbody>
            {table.map((item, index) => (
              <tr key={index}>
                <td>{item.col1}</td>
                <td>{item.col2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}
export default Result;