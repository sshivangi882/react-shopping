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
import TwoWayClassDemo from "./components/TwoWayClassDemo.js";
// import TwoWayFunctionDemo from "./components/TwoWayFunctionDemo.js";
import ShoppingClassDemo from "./components/ShoppingClassDemo.js";
import FormComponent from "./components/FormComponent.js";
import FormikDemo from "./components/FormikDemo.js";
import FormikValidation from "./components/FormikValidation.js";
import YupValidation from "./components/YupValidation.js";
import YupValidationComponent from "./components/YupValidationComponent.js";
import LifeCycleDemo from "./components/LifeCycleDemo.js";
import ReactHookDemo from "./components/ReactHookDemo.js";
import ContextDemo from "./components/ContextDemo.js";
import { CookiesProvider } from "react-cookie";
import { UserLogin } from "./components/UserLogin.js";
import ReducerDemo from "./components/ReducerDemo.js";
import CustomHookDemo from "./components/CustomHookDemo.js";
import JQueryAjaxDemo from "./components/JQueryAjaxDemo.js";
import AxiosDemo from "./components/AxiosDemo.js";
import ShoppingIndex from "./Shopping/ShoppingIndex.js";
import SPAComponent from "./components/SPAComponent.js";
import IShopIndex from "./ishop/IShopndex.js";
import BankAppHome from "./BankApp/BankAppHome.js";
import MainComponent from "./BankApp/MainComponent.js";
import SearchDemo from "./components/SearchDemo.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IShopIndex />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
