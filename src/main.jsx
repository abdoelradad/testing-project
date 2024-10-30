import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./wepsite/Home.jsx";
import Navbar from "./wepsite/Nav.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App />
    <Home /> */}
    <Navbar />
  </StrictMode>
);
