import './assets/styles/global.css'
import './assets/styles/custom-scrollbar.css'
import 'react-responsive-modal/styles.css';

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
