import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

// components
import App from "./App";
import Results from "./Results";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/q/:id" element={<Results />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>
                <b>404</b> | There's nothing here!
              </p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
