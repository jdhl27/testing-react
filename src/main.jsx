import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { FirstApp } from "./components/FirstApp.jsx";
// import { CounterApp } from "./components/CounterApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <CounterApp value={ 20 } /> */}
    <FirstApp title="Juan" />
  </React.StrictMode>
);
