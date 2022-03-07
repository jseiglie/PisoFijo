import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Details } from "./pages/details.js";
import  Filter from "./pages/filter.js";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Login } from "./pages/login";
import { Navbar } from "./component/Navbar";
import { Footer } from "./component/Footer";
import bg from "../img/bg.png"
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div style={{backgroundImage: `url(${bg}`,
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat' }}>
			<BrowserRouter basename={basename}>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/filter">
							<Filter />
						</Route>
						<Route exact path="/details">
							<Details name="Piso luminoso Alcobendas" type="Flat" location="Madrid" value="200.000" area="200" numRooms="2" floor="2" 
							description=
								{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec leo
							 	rhoncus, sodales nisi et, faucibus nunc. Ut tempor dolor arcu, nec malesuada lorem
							 	pretium vel. Vivamus iaculis, diam at lacinia sodales, enim ante posuere velit, a 
							  	aliquam ligula velit nec ante. Proin tempor luctus tortor, ut ultricies erat bibendum
							   	vel. Phasellus in turpis aliquam, consectetur dolor eu, dapibus dolor. Aliquam diam
							    massa, consectetur in placerat id, pellentesque ac urna. Duis ut rutrum ipsum. Sed
								elementum purus id purus aliquet, non vehicula ante posuere. Etiam rhoncus mollis
								eros ac elementum. Phasellus efficitur porttitor ligula, sed commodo lectus
								scelerisque a. Quisque vel mi turpis.`} />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
