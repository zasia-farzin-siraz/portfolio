import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/inter";
import "@fontsource/press-start-2p";

import "./index.css";
import App from "./App";

import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);