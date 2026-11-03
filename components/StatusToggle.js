"use client";
import { useState } from "react";

export default function StatusToggle() {
  const [isAvailable, setisAvailable] = useState(true);

  function handleToggle() {
    setisAvailable(!isAvailable);
  }
  return (
    <div>
      <h2>isAvailable: {isAvailable ? "Available" : "Unavailable"} </h2>
      <button onClick={handleToggle}> Click </button>
    </div>
  );
}
