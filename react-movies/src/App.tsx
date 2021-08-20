import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  // khai báo trạng thái - state của react
  const [myDate, myDateUpdate] = useState(new Date());
  

  /***
   * const [state, setstate] = useState(initialState)
   * - state: tên biến
   * - setstate: hàm update lại giá trị biến
   * - initialState: giá trị khởi tạo
   * useEffect : quản lý các vòng đời của component và nó phục vụ chúng ta sử dụng trong function component thay vì các lifecycle như trước đây trong class component.
   */
  useEffect(() => {
    const intervalId = setInterval(() => {
      myDateUpdate(new Date());
    }, 100);
    // làm sách thời gian trước khi thoát
    return () => clearInterval(intervalId);
  })
  return (
    <div className="App">
      <h3> Example HTML</h3>
      <input type="text" />
      <div>${myDate.toString()}</div>
    </div>
  );
}

export default App;
