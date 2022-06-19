import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Form from "./Form";
import Family from "./Family";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <hr/>
    <Form />
    <hr/>
    <hr/>
    <App />
    <hr />
    <hr />
    <Family />
  </React.StrictMode>
);
