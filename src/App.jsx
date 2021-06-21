import React from "react";
import Header from "./Container/Header";
// import TheContent from "./containers/TheContent";
// import { BrowserRouter as Router } from "react-router-dom";
// import "./assets/scss/style.scss";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      {/* <Router> */}
      <div className="wrapper">
        <Header />
        {/* <TheContent /> */}
      </div>
      {/* </Router> */}
    </>
  );
}
