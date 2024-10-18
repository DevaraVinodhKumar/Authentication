
import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

function Dashboard() {
  const { authState, logout } = useContext(AuthContext);

  return (
    <div data-testid="dashboard">
      <h2>Dashboard</h2>
      <p>Welcome! Your token: {authState.token}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;

