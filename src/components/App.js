
import React from "react";
import { useState } from "react";
import './../styles/App.css';

const App = () => {


  const[count,setCount] = useState(0);

  const countClicks = ()=>{
    setCount(click=>click+1);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {count} times</p>
        <button onClick={countClicks} >Click me</button>
    </div>
  )
}

export default App
