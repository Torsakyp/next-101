"use client";

export default function NameInput() {
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <div>
      <p className="mb-2">output show on console log</p>
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={handleChange}
      />
    </div>
  );
}
