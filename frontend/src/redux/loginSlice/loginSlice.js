import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { postlogin } from "../../services";
import { checkUser } from "../../services";
import { toast } from "react-toastify";

export const postLogins = createAsyncThunk(
	"login/postLogins",
	async (req, { rejectWithValue }) => {
		try {
			const data = await postlogin(req);
			const res = data.data.msg;
			if (res) {
				window.sessionStorage.setItem("user", req.userId);
				toast.success("Login Successfull", { autoClose: 1000 });
				return data;
			}
			toast.error("Unable to login", { autoClose: 1000 });
		} catch (error) {
			throw rejectWithValue(error);
		}
	}
);

// check user in sessionStorage
const check = checkUser() || false;

const initialState = {
	isLoggedIn: check,
	loading: false,
};

const loginSlice = createSlice({
	name: "login",
	initialState,
	reducers: {
		logout: (state) => {
			state.isLoggedIn = false;
		},
		loading: (state) => {
			state.loading = true;
		},
	},
	extraReducers: {
		// post
		[postLogins.pending]: (state) => {
			console.log("Pending -> Login");
		},
		[postLogins.fulfilled]: (state, { payload }) => {
			console.log("Success -> Login");
			return {
				...state,
				isLoggedIn: checkUser(),
				loading: false,
			};
		},
		[postLogins.rejected]: (state, { payload }) => {
			console.log("Rejected -> Login");
			const msg = (payload.response.data.msg);
			toast.error(msg, { autoClose: 1000 });
			return {
				...state,
				loading: false,
			};
		},
	},
});

export const { logout, loading } = loginSlice.actions;

export const getUserLogin = (state) => state.login.isLoggedIn;
export const getLoading = (state) => state.login.loading;

export default loginSlice.reducer;
