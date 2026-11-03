"use client";
import { useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  async function getUsers() {
    setLoad(true);
    setError("");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/usesrs",
      );
      if (!response.ok) {
        throw new Error("API Failed");
      }
      console.log("HTTP Status:", response.status);
      console.log("Response OK:", response.ok);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
      setError("Unable to load users");
    } finally {
      setLoad(false);
    }
    // console.log(data);
  }
  return (
    <div>
      <h2>User List</h2>
      <button disabled={load} onClick={getUsers}>
        {load ? "Loading..." : "Load User"}
      </button>
      {error && <p> {error} </p>}
      <p>Total Users: {users.length}</p>
      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}
