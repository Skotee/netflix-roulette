import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

if (process.env.NODE_ENV !== "production") {
	console.log("Looks like we are in development mode!");
}


// ReactDOM.render(<App />, document.getElementById("app"));
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
