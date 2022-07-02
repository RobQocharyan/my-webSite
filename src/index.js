import React from 'react';  
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./Redux/redux-store";
import { Provider } from "react-redux";
import SamuraiJsApp from './App';
const root = ReactDOM.createRoot(document.getElementById("root"));



  root.render(
    <SamuraiJsApp />
  );
