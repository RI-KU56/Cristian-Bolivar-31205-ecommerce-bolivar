import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD9gkbpZrPkfmo_kHu5LUnPnRkCA1JWbRc",
  authDomain: "ecommerce-bolivar.firebaseapp.com",
  projectId: "ecommerce-bolivar",
  storageBucket: "ecommerce-bolivar.appspot.com",
  messagingSenderId: "53859794609",
  appId: "1:53859794609:web:f57f54c1979ec194146c90"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  {/* <React.StrictMode>
    <App />
  </React.StrictMode> */}
  <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
