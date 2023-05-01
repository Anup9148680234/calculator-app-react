import { useState } from 'react';
import './App.css';

function App() {
  let [res, setRes] = useState(0);

  function calculate(){
    let x = document.getElementById('n1').value;
    let y = document.getElementById('n2').value;
    let sel = document.getElementById('op');
    let op = sel.options[sel.selectedIndex].text;
    if(op === "+"){
      setRes(Number.parseInt(x)+Number.parseInt(y));
    }
    else if(op === "-"){
      setRes(Number.parseInt(x)-Number.parseInt(y));
    }
    else if(op === "*"){
      setRes(Number.parseInt(x)*Number.parseInt(y));
    }
    else if(op === "/"){
      setRes(Number.parseInt(x)/Number.parseInt(y));
    }
   
    document.getElementById('n1').value = "";
    document.getElementById('n2').value = "";
  }

  function clear(){
    setRes(0);
  }

  return (
    <div className="App">
      <h3><button id="clr" type="button" onClick={clear}>C</button> {res}</h3>
      <label>Number 1: </label>
      <input name="n1" id="n1" type="number" />
      <label>Operator: </label>
      <select id="op">
        <option>+</option>
        <option>-</option>
        <option>*</option>
        <option>/</option>
      </select>
      <label>Number 2: </label>
      <input name="n2" id="n2" type="number" />
      <button type="button" onClick={calculate}>Calculate</button> 
    </div>
  );
}

export default App;
