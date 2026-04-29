// Login.js
import { useState } from "react";
import { loginUser } from "../services/authService";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await loginUser(username, password);

      const token = res.data;

      localStorage.setItem("token", token);
      alert("Login successful");

      window.location.href = "/books";

    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;