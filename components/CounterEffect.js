"use client";
import { useState, useEffect } from "react";

export default function CounterEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Effect 1:", count);
  }, [count]);

  useEffect(() => {
    console.log("Effect 2:", count);
  }, []);

  useEffect(() => {
    console.log("Effect 3:", count);
  });

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
