
/*
 * @Author: 陈凯（实习） 1264504656@qq.com
 * @Date: 2023-10-18 09:00:02
 * @LastEditors: 陈凯（实习） 1264504656@qq.com
 * @LastEditTime: 2023-10-18 10:40:31
 * @FilePath: \项目\front\src\App.js
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import "./App.css";
import Main from "./views/main";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Result from "./views/result";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={<Main />} />
          <Route path="/result" element=<Result /> />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
