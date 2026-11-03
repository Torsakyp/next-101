"use client";

export default function ButtonClick() {
  function handleClick() {
    console.log("Hello Next.js!");
  }

  return (
    <div>
      <p className="mb-2">output show on console log</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
