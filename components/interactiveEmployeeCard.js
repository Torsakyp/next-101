"use client";
import { useState } from "react";

export default function InteractiveEmployeeCard({ props }) {
  const [isAvailable, SetisAvailable] = useState(props.isAvailable);

  function ToggleStatus() {
    SetisAvailable(!isAvailable);
  }

  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.role}</h3>
      <p>Experience: {props.experience} Years</p>
      <p>Status: {isAvailable ? "Available" : "Unavailable"} </p>
      <button onClick={ToggleStatus}>Click</button>
    </div>
  );
}
