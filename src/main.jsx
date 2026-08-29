import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import Productcontxt from "./context/productcontxt";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/product_managment">
      <Productcontxt>
        <App />
      </Productcontxt>
    </BrowserRouter>
  </StrictMode>
);