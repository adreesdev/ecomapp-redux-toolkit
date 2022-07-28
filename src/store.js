import { configureStore } from "@reduxjs/toolkit/";
import cartSlice from "./features/cart/cartSlice";
import cardSlice from "./features/products/cardSlice";
import detailSlice from "./features/products/detailSlice";

export const store = configureStore({
	reducer: {
		products: cardSlice,
		details: detailSlice,
		cart: cartSlice,
	},
});
