import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./css/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter basename="/test-demo">
      <App />
    </HashRouter>
  </StrictMode>
);
