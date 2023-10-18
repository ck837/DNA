import "./index.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Main() {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  function onFileSelected(event) {
    var selectedFile = event.target.files[0];
    var reader = new FileReader();


    reader.onload = function (event) {
      setText(event.target.result)
    };
    reader.readAsText(selectedFile);
  }

  function handleGen() {
    axios.post("/api/postData", {
      data: text
    }).then((res) => {
    }).catch((res) => {
    })
    navigate("/result");
  }

  const handleTextareaChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="main-content">
      {/* <h2 >Novel_Transformer_Networks_for_Improved_Sequence_Labeling_in_genomics </h2> */}
      <div className="main-function-button">
        <button
          className="funciton-button"
        >
          导入
        </button>

        <button
          className="funciton-button"
          onClick={() => {
            handleGen()
          }}
        >
          生成
        </button>
      </div>
      <div className="main-text">
        <textarea
          value={text}
          onChange={handleTextareaChange}
          style={{ width: "100%", height: "70%" }}
        ></textarea>
      </div>
      <div className="main-atcg-button">
        <button
          className="atcg-button"
          onClick={() => {
            setText(text + "A");
          }}
        >
          A
        </button>
        <button
          className="atcg-button"
          onClick={() => {
            setText(text + "T");
          }}
        >
          T
        </button>
        <button
          className="atcg-button"
          onClick={() => {
            setText(text + "C");
          }}
        >
          C
        </button>
        <button
          className="atcg-button"
          onClick={() => {
            setText(text + "G");
          }}
        >
          G
        </button>
      </div>
    </div>
  );
}
export default Main;
