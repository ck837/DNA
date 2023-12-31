/*
 * @Author: 陈凯（实习） 1264504656@qq.com
 * @Date: 2023-10-18 09:09:35
 * @LastEditors: 陈凯（实习） 1264504656@qq.com
 * @LastEditTime: 2023-10-19 23:08:36
 * @FilePath: \front\src\views\main\index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved. 
 */
import "./index.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const modelTypeDic = {
  1: 'M4C',
  2: 'TIS',
  3: 'TSS'
}

function Main() {
  const [type, setType] = useState(modelTypeDic[1]);
  const [path, setPath] = useState('')
  const navigate = useNavigate();

  function onFileSelected(event) {
    setPath(event.target.files[0])
    axios.post("/api/postFile",event.target.files[0]
    ).then((res) => {
    }).catch((res) => {
    })
  }

  function handleTypeChange() {

    axios.post("/api/postData", {
      type: type,
    }).then((res) => {
    }).catch((res) => {
    })
    navigate("/result");
  }


  return (
    <div className="main-content">
      {/* <h2 >Novel_Transformer_Networks_for_Improved_Sequence_Labeling_in_genomics </h2> */}
      <div className="main-function-button" style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
        <div className="funciton-button">
          <label htmlFor="file-input" style={{ fontSize: "14px", display: "flex", alignItems: "center", justifyContent: "center", height: '100%' }}>导入</label>
          <input
            id="file-input"
            type="file"
            onChange={(e) => {
              onFileSelected(e)
            }}
            accept=".npy"
            style={{ display: "none" }}
          />
        </div>
        <div style={{ width: '20%', height: '30%' }}>
          <button
            style={{ width: '100%', height: '100%' }}
            className="funciton-button"
            onClick={() => {
              handleTypeChange()
            }}
          >
            生成
          </button>
        </div>
        <div style={{ width: '15%', height: '30%' }}>
          <select
            onChange={e => setType(e.target.value)}
            style={{ width: '100%' }}
          >
            <option value={modelTypeDic[1]}>{modelTypeDic[1]}</option>
            <option value={modelTypeDic[2]} > {modelTypeDic[2]}</option>
            <option value={modelTypeDic[3]}> {modelTypeDic[3]}</option>
          </select>
        </div>
      </div >
    </div>
  );
}
export default Main;