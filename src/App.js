import React from 'react';
import './App.css';

function App() {

  const makeRandomColor = numDigits => {
    let allowable = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexArr = [];
    for (let i = 0; i < numDigits; i++) {
      hexArr.push(allowable[Math.floor(Math.random() * 16) + 0]);
    }
    if (numDigits === 6) {
      hexArr.unshift("#");
    }
    return hexArr.join("");  
  }

  const makeNextColor = lastColor => {
    let lastHexArr = lastColor.split('');
    let newHexArr = lastHexArr;
    console.log("Last hex array: ", lastHexArr)
    let numNewDigits = 2;
    for (let i = 0; i < numNewDigits; i++) {
      let newPosition = Math.floor(Math.random() * 6) + 1;
      console.log("Position for", i)
      console.log("is ", newPosition)
      let newDigit = makeRandomColor(1);
      newHexArr[newPosition] = newDigit
      console.log("New newHexArr is ", newHexArr)
    }
    return newHexArr.join('')
  }

  const makeBoxes = () => {
    let boxes = [];
    let colors = [];
    for (let i = 0; i < 500; i++) {
      let width = Math.floor(Math.random() * 100) + 1;
      // let height = Math.floor(Math.random() * 500) + 100;
      let height = 50;
      if (i === 0) {
        colors.push(makeRandomColor(6));
      } else {
        colors.push(makeNextColor(colors[i - 1]))
      }
      let style = {
        backgroundColor: colors[i], 
        width: width,
        height: height
      }
      boxes.push(
        <div className="colored-box" style={style}></div>
      )
    }
    return boxes
  }

  const makeCanvasStyle = () => {
    return {
      backgroundColor: makeRandomColor(6)
    }
  }

  return (
    <div className="App">
      <header className="App-header" style={makeCanvasStyle()}>
        <div id="boxes">
          {makeBoxes()}
        </div>
      </header>
    </div>
  );
}

export default App;
