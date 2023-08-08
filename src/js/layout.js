import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Main } from "./views/main";
import { CharactersDescription } from "./views/charactersDescription";
import { PlanetsDescription } from "./views/planetsDescription";
import { VehiclesDescription } from "./views/vehiclesDescription";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Main />} />
						<Route path="/charactersDescription/:id" element={<CharactersDescription />} />
						<Route path="/planetsDescription/:id" element={<PlanetsDescription />} />
						<Route path="/vehiclesDescription/:id" element={<VehiclesDescription />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
