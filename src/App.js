import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // setCount 함수를 사용하여 count 상태를 1 증가
    setCount(count + 1);
  };

  const decrement = () => {
    // setCount 함수를 사용하여 count 상태를 1 감소
    setCount(count - 1);
  };

  return (
    <div>
      <h1>카운터</h1>
      <p>현재 값: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
