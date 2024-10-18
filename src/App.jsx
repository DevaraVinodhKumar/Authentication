
import React, { useContext } from "react";
import { AuthContext } from "./Context/AuthContextProvider";
import Login from "./Components/Login";
import Dashboard from "./Components/DashBoard";

function App() {
  const { authState } = useContext(AuthContext);

  return (
    <div className="App">
      {authState.isAuth ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;

