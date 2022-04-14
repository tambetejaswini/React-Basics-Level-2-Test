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
        <div>
          <label>Content</label>
          <input
            type="text"
            id="contentInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Padding</label>
          <input
            type="number"
            id="paddingInput"
            value={pad}
            onChange={(e) => setPad(e.target.value)}
          />
        </div>
        <div>
          <label>Font Size</label>
          <input
            type="number"
            id="fontSizeInput"
            value={font}
            onChange={(e) => setFont(e.target.value)}
          />
        </div>
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
