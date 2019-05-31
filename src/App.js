import React from 'react';
import './App.css';

function App() {

  const makeRandomColor = () => {
    let allowable = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexArr = ['#'];
    for (let i = 0; i < 6; i++) {
      hexArr.push(allowable[Math.floor(Math.random() * 16) + 0]);
    }
    return hexArr.join("");  
  }

  const makeBoxes = () => {
    let boxes = [];
    for (let i = 0; i < 200; i++) {
      let newColor = makeRandomColor();
      let style = { backgroundColor: newColor }
      boxes.push(
        <div className="colored-box" style={style}>{newColor}</div>
      )
    }
    return boxes
  }

  return (
    <div className="App">
      <header className="App-header">
        <div id="boxes">
          {makeBoxes()}
        </div>
      </header>
    </div>
  );
}

export default App;
