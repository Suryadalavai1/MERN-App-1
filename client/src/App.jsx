import { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((res) => {
      setUsers(res.data);
    });
  });

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username,
    }).then((res) => {
      alert("User created successfully");
    });
  };

  return (
    <div className="App">
      <div className="usersDisplay">
        {users.map((user, id) => {
          return (
            <li key={id}>
              <div>
                <h1>Name: {user.name}</h1>
                <h1>Age: {user.age}</h1>
                <h1>Username: {user.username}</h1>
              </div>
            </li>
          );
        })}
      </div>
      <div className="enterUser">
        <label>Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Age:</label>
        <input
          type="number"
          placeholder="Enter your age"
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Username:</label>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={createUser}>Submit</button>
      </div>
    </div>
  );
}

export default App;
