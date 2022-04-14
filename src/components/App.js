import React, { useState } from "react";
import "../styles/App.css";
import { Preview } from "./Preview";
const App = () => {
  const [font, setFont] = useState(10);
  const [pad, setPad] = useState(5);
  const [title, setTitle] = useState("hello world");
  return (
    <div id="main">
      <div>
        <input
          type="text"
          id="contentInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          id="fontSizeInput"
          value={font}
          onChange={(e) => setFont(e.target.value)}
        />
        <input
          type="number"
          id="paddingInput"
          value={pad}
          onChange={(e) => setPad(e.target.value)}
        />
      </div>

      <Preview
        fontSize={font + "px"}
        content={title}
        padding={pad + "px"}
      ></Preview>
    </div>
  );
};

export default App;
