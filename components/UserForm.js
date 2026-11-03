"use client";
import { useState } from "react";

export default function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleNameChange(event) {
    setFormData({
      ...formData,
      name: event.target.value,
    });
  }

  function handleEmailChange(event) {
    setFormData({
      ...formData,
      email: event.target.value,
    });
  }

  return (
    <div>
      <input
        type="text"
        value={formData.name}
        placeholder="Enter Your Name"
        onChange={handleNameChange}
      />
      <input
        type="email"
        value={formData.email}
        placeholder="Enter Your Email"
        onChange={handleEmailChange}
      />

      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}
