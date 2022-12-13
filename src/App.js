import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Acceuil from "./components/Acceuil";

export default function App() {
	return (
		<Router>
			<div>
				<Acceuil />
			</div>
		</Router>
	);
}
