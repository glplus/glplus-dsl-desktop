import * as React from "react";
import { StyledEngineProvider } from '@mui/material/styles';
import "../assets/css/globals.css";

import { createRoot } from "react-dom/client";
import App from "./App";

const root = createRoot(document.getElementById("app")!);
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </React.StrictMode>
);
