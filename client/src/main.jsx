import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import AllServices from "./components/AllServices.jsx";
import ServiceDetails from "./components/ServiceDetails.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
