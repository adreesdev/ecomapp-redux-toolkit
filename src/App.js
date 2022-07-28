import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import MensPage from "./pages/products/MensPage";
import WomensPage from "./pages/products/WomensPage";
import KidsPage from "./pages/products/KidsPage";
import Header from "./components/header/Header";
import ProductDetails from "./pages/products/ProductDetails";
import Cart from "./pages/cart/Cart";
const App = () => {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/mens-shoes" element={<MensPage />} />
					<Route path="/womens-shoes" element={<WomensPage />} />
					<Route path="/kids-shoes" element={<KidsPage />} />
					<Route path="/details/:id" element={<ProductDetails />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
