import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Landing from "./Pages/Landing.jsx";
import Home from "./Pages/Home.jsx";

function App() {
	return (
		<div className="App">
			<Router>
				{/* <Switch> */}
				<Route exact path="/home" component={Home} />
				<Route exact path="/" component={Landing} />
				{/* </Switch> */}
			</Router>
		</div>
	);
}

export default App;
