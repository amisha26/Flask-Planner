import { configureStore } from "@reduxjs/toolkit";
import remarkSlice from "./remarkSlice/remarkSlice";
import loginSlice from "./loginSlice/loginSlice";

export const store = configureStore({
	reducer: {
		remark: remarkSlice,
		login: loginSlice,
	},
});
