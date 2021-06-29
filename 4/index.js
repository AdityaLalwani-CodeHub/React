//React Parent/Child Component
// Set up the React app from scratch
// Render an App component (defined in a separate file)
// Inside App, render:
// 1. A Navbar component
// 2. A MainContent component
// 3. A Footer component

import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./Navbar.js";
import MainContent from "./MainContent.js";
import Footer from "./Footer.js";

function MyApp() {
	return (
		<div>
			<Navbar />
			<MainContent />
			<Footer />
		</div>
	);
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
