import React, { useState } from "react";

function App() {
  const [text, setText] = useState("Hello, World!");

  const handleClick = () => {
    setText("You clicked the button!");
  };

  return (
    <div className="App">
      <h1>{text}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
