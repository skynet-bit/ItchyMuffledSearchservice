import React, { useState } from "react";
import "./Keyboard.css";
import  { setText } from "./KeyboardUtil";

const Keyboard = ({ message, setMessage }) => {
  // isCap === 0 for all small letters
  // isCap === 1 for first capital letter
  // isCap === 2 for all capital letters
    const [isCap, setIsCap] = useState(0);

    // mousedown time of each button
    let press_time = 0;

    const onMouseUp = (e) => {
      // to get which button is clicked
      const id = Number(e.target.id);
      var cur_time = new Date();
      // to differentiate long press and short press
      var gap_time = cur_time - press_time;

      if(gap_time > 1000 && ((id >= 4 && id <= 12) || id === 14)) {
        // long press
        const append = (id === 14) ? 0: id-3;
        setMessage(message+append);
      } else {
        // short press
        let result = setText(id, message, isCap);
          setMessage(result.message);
          setIsCap(result.isCap);
      }
    }

  return (
    <>
      <div className="row">
        <button id="1" onMouseDown={() => press_time = new Date()} onMouseUp={onMouseUp} className="key">&#9881;</button>
        <button id="2" onMouseDown={() => press_time = new Date()} onMouseUp={onMouseUp} className="key"> &#8629;</button>
        <button id="3" onMouseDown={() => press_time = new Date()} onMouseUp={onMouseUp} className="key">⌫</button>
      </div>
      <div className="row">
        <button id="4" onMouseDown={() => press_time = new Date()} onMouseUp={onMouseUp} className="key">.?!</button>
        <button id="5" onMouseDown={() => press_time = new Date()} onMouseUp={onMouseUp} className="key">{isCap === 0?'abc': (isCap === 1? "Abc": "ABC")}</button>
        <button id="6" onMouseDown={() => press_time = new Date()} onMouseUp={onMouseUp} className="key">{isCap === 0?'def': (isCap === 1? "Def": "DEF")}</button>
      </div>
      <div className="row">
        <button id="7" onMouseDown={() => press_time = new Date()} onMouseUp={onMouseUp} className="key">{isCap === 0?'ghi': (isCap === 1? "Ghi": "GHI")}</button>
        <button id="8" onMouseDown={() => press_time = new Date()} onMouseUp={onMouseUp} className="key">{isCap === 0?'jkl': (isCap === 1? "Jkl": "JKL")}</button>
        <button id="9" onMouseDown={() => press_time = new Date()} onMouseUp={onMouseUp} className="key">{isCap === 0? 'mno': (isCap === 1? "Mno": "MNO")}</button>
      </div>
      <div className="row">
        <button id="10" onMouseDown={() => press_time = new Date()} onMouseUp={onMouseUp} className="key">{isCap === 0?'pqrs': (isCap === 1? "Pqrs": "PQRS")}</button>
        <button id="11" onMouseDown={() => press_time = new Date()} onMouseUp={onMouseUp} className="key">{isCap === 0?'tuv': (isCap === 1? "Tuv": "TUV")}</button>
        <button id="12" onMouseDown={() => press_time = new Date()} onMouseUp={onMouseUp} className="key">{isCap === 0?'wxyz': (isCap === 1? "Wxyz": "WXYZ")}</button>
      </div>
      <div className="row">
        <button id="13" onMouseDown={() => press_time = new Date()} onMouseUp={onMouseUp} className="key">*#$@</button>
        <button id="14" onMouseDown={() => press_time = new Date()} onMouseUp={onMouseUp} className="key">_</button>
        <button id="15" onMouseDown={() => press_time = new Date()} onMouseUp={onMouseUp} className="key">&#x2191;</button>
      </div>
    </>
  );
};

export default Keyboard;