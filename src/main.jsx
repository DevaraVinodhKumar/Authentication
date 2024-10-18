
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthContextProvider } from "./Context/AuthContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
      <App />
  </AuthContextProvider>
);
