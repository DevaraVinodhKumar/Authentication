
import React, { useState, useContext } from "react";
import { AuthContext } from "./Context/AuthContextProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, authState } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div data-testid="login">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={authState.loading}>
          {authState.loading ? "Logging in..." : "Login"}
        </button>
      </form>
      {authState.error && <p style={{ color: "red" }}>{authState.error}</p>}
    </div>
  );
}

export default Login;