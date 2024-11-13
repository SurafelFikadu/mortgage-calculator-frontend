import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
// import ContextProvider from "./Context/CalculateContext.tsx";

createRoot(document.getElementById("root")!).render(
  // <ContextProvider>
  <StrictMode>
    <App />
  </StrictMode>
  // </ContextProvider>
);
