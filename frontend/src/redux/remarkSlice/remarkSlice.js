import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRemarks, postRemark, delRemark, putRemark } from "../../services";

export const fetchRemarks = createAsyncThunk(
	"remark/fetchRemarks",
	async () => {
		const data = await getRemarks();
		return data;
	}
);

export const postRemarks = createAsyncThunk(
	"remark/postRemarks",
	async (req) => {
		// eslint-disable-next-line
		const res = await postRemark(req);
		const data = await getRemarks();
		return data;
	}
);

export const putRemarks = createAsyncThunk(
	"remark/putRemarks",
	async (requ) => {
		const { id, req } = requ;
		// eslint-disable-next-line
		const res = await putRemark(id, req);
		const data = await getRemarks();
		return data;
	}
);

export const delRemarks = createAsyncThunk("remark/delRemarks", async (req) => {
	// eslint-disable-next-line
	const res = await delRemark(req);
	const data = await getRemarks();
	return data;
});

const initialState = {
	remarks: [],
};

const remarkSlice = createSlice({
	name: "remark",
	initialState,
	reducers: {
		handleGetRemark: (state, { payload }) => {
			state.remarks = payload;
		},
	},
	extraReducers: {
		// fetch
		[fetchRemarks.pending]: (state) => {
			console.log("Pending -> Fetch Remarks");
		},
		[fetchRemarks.fulfilled]: (state, { payload }) => {
			console.log("Success -> Fetch Remarks");
			return { ...state, remarks: payload };
		},
		[fetchRemarks.rejected]: (state) => {
			console.log("Rejected -> Fetch Remarks");
		},
		// post
		[postRemarks.pending]: (state) => {
			console.log("Pending -> Post Remarks");
		},
		[postRemarks.fulfilled]: (state, { payload }) => {
			console.log("Success -> Post Remarks");
			return { ...state, remarks: payload };
		},
		[postRemarks.rejected]: (state) => {
			console.log("Rejected -> Post Remarks");
		},
		// put
		[putRemarks.pending]: (state) => {
			console.log("Pending -> Put Remarks");
		},
		[putRemarks.fulfilled]: (state, { payload }) => {
			console.log("Success -> Put Remarks");
			return { ...state, remarks: payload };
		},
		[putRemarks.rejected]: (state) => {
			console.log("Rejected -> Put Remarks");
		},
		// delete
		[delRemarks.pending]: (state) => {
			console.log("Pending -> Delete Remarks");
		},
		[delRemarks.fulfilled]: (state, { payload }) => {
			console.log("Success -> Delete Remarks");
			return { ...state, remarks: payload };
		},
		[delRemarks.rejected]: (state) => {
			console.log("Rejected -> Delete Remarks");
		},
	},
});

export const getRemarksData = (state) => state.remark.remarks;

export default remarkSlice.reducer;
