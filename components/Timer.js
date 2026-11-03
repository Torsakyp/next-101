"use client";
import { useState, useEffect } from "react";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    console.log("START");
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
      console.log("object");
    }, 1000);

    return () => {
      console.log("CLEANUP");
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>Timer: {seconds} Seconds</h2>
    </div>
  );
}
