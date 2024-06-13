import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/router";
import { HelmetProvider } from "react-helmet-async";

const savedMode = localStorage.getItem("darkmode");
if (savedMode && JSON.parse(savedMode)) {
  document.documentElement.classList.add("dark");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div className="bg-gray-100 dark:bg-neutral-900 transition duration-200">
        <div className="max-w-7xl mx-auto">
          <RouterProvider router={router}></RouterProvider>
        </div>
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
