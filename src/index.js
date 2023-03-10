import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

if (process.env.NODE_ENV !== "production") {
	console.log("Looks like we are in development mode!");
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(  
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
