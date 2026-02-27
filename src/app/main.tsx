import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@styles/global.css";
import "@styles/reset.css";
// import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <>
      <h1>Hello!</h1>
    </>
  </StrictMode>,
);
