import React, { useState } from "react";

import "./App.css";
import Home from "../src/pages/Home";
import Pass from "../src/pages/Pass";

function App() {
  const password = process.env.REACT_APP_ENVPASSWORD

  const [inputValue, setInputValue] = useState("")
  const handleInput = (ev: any) => {
    setInputValue(ev.target.value)

  }  
  console.log("🚀 ~ file: App.tsx:9 ~ App ~ password:", inputValue)
  return (
    <div className="App">
     
      {inputValue === password ? <Home /> : <Pass onChange={handleInput} value={inputValue}/> }
    </div >
  );
}

export default App;
