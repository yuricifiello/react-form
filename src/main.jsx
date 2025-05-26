import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import * as bootstrap from "bootstrap";
import "./assets/css/index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
