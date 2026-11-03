"use client";
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount((prev) => prev - 1); //Functional Update
  }

  function handleReset() {
    setCount(count - count);
  }

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Rest</button>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}
