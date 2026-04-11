import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

// import style
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Router>,
);
