"use client";
import { useState } from "react";

export default function ControlInput() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={handleChange}
        value={name}
      />
      <h2>Name: {name}</h2>
    </div>
  );
}
