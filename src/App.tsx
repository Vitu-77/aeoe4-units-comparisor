import "@assets/styles/global.css";

import React from "react";

import { Routes } from "@infra/routes";
import { AppContainer } from "@core/components/app-container";

function App() {
  return (
    <AppContainer>
      <Routes />
    </AppContainer>
  );
}

export default App;
