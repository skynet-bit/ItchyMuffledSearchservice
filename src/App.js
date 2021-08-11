import React, { useState } from "react";
import Keyboard from "./components/Keyboard";
import "./App.css";


const App = () => {
    let [message, setMessage] = useState("");
  return (
    <div>
      <div className="container">
        <div className="sub-container">
          <h1>Skynet-bit</h1>
		  <p>T9 Keypad emulation by Aravindh Akshay</p>
          
          <div className="phone">
            <span  class="dot"></span>
            <div className="screen">
              <textarea
                value={message}
                type="text"
                id="message"
                placeholder="T9 keypad by Aravindh Akshay"
              />
            </div>
            <div className="keyboard">
              <Keyboard setMessage={setMessage} message={message} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;