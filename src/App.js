import React, { Component } from "react";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom"
import { Home } from "./pages/Home/Home";
import ErrorBoundary from "./ErrorBoundary";
import './App.scss'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/home",
		element: <Home />,
	},
  ]);
class App extends Component {
	render() {
		return(
		<ErrorBoundary>
			<div className="mainContainer" id="mainContainer">
				<RouterProvider router={router} />
			</div>
		</ErrorBoundary>
		);
	}
}

export default App;
