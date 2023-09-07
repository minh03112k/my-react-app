// import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
// import Header from "./components/Header";
// import LoginForm from "./components/LoginForm";
import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(1);
  const [username, setUsername] = useState("");
  const [color, setColor] = useState('red');

  const handleIncrease = () => {
    setCounter(counter + 1);
  }

  const handleInputUsername = (event) => {
    setUsername(event.target.value);
  }

  const changeColor = () => {
    const colors = ['red', 'blue', 'pink', 'gray', 'yellow' ]
    const currentColor = colors.indexOf(color)
    const nextColor = colors[(currentColor + 1) % colors.length]
    setColor(nextColor)
  }

  
  return (
    <div className="counter-number">
      <h1>{counter}</h1>
      {/* <Button buttonName='Increase' onButtonClick={handleIncrease} /> */}
      <button onClick={handleIncrease} style={{marginTop: "12px"}}>Test</button>
      <input onChange={(event) => handleInputUsername(event)}  type="text" />
      <p>Welcome {username}</p>
      <h1>
        style = {
          {
            with: "50%",
            heigh: "50%",
            backgroundColor: color
          }
        }
      </h1>
      <Button buttonName='ChangeColor' onButtonClick={changeColor} />
    </div>
  );
}

  


export default App;
// create input name for user to put their name, save their name to display in Welcome message 