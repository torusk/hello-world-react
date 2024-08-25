import React, { useState } from "react";

function App() {
  const [text, setText] = useState("Hello, World!");
  // 新規追加: クリック回数を追跡するための state
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setText("You clicked the button!");
    // 新規追加: クリック回数を増やす
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <h1>{text}</h1>
      {/* 新規追加: クリック回数を表示 */}
      <p>クリック回数: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;
