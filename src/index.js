import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import { NetflixRegisterComponent } from "./components/NetflixRegisterComponent.js";
import NetflixIndexComponent  from "./components/NetflixIndexComponent.js"
import ShoppingComponent from "./components/ShoppingComponent.js";
import EventBindingComponent from "./components/EventBindingComponent.js";
import LoginComponent from "./components/LoginComponent.js";
import RegisterComponent from "./components/RegisterComponent.js";
import reportWebVitals from "./reportWebVitals";
import DataBindingComponent from "./components/DataBindingComponent.js";
import TwoWayBinding from "./components/TwoWayBinding.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TwoWayBinding />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
