import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./style/index.css";
import aos from "aos";
import "aos/dist/aos.css";
import Home from "./Home";
import Catalog from "./Catalog";
import Login from "./auth/Login";
import Register from "./auth/Register";

aos.init();
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/catalog" element={<Catalog />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
);

reportWebVitals();
