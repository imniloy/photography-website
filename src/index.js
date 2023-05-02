import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import router...
import { BrowserRouter as Router } from "react-router-dom";
// import context provider...
import CursorContextProvider from "./context/CursorContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CursorContextProvider>
      <Router>
        <App />
      </Router>
    </CursorContextProvider>
  </React.StrictMode>
);
