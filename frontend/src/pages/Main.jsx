import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Remarks } from "../comp";
import { getRemarksData } from "../redux/remarkSlice/remarkSlice.js";
import {
	fetchRemarks,
	putRemarks,
	delRemarks,
	postRemarks,
} from "../redux/remarkSlice/remarkSlice.js";

const Main = () => {
	// ============ Redux ===============

	const dispatch = useDispatch();

	const remarksData = useSelector(getRemarksData);

	// ============ Api Calls ===============

	// On page load
	useEffect(() => {
		dispatch(fetchRemarks());
		// eslint-disable-next-line
	}, []);

	const handlePostRemark = (req) => {
		dispatch(postRemarks(req));
	};

	const handleUpdateRemark = (id, req) => {
		dispatch(putRemarks({id,req}));
	};

	const handleDelRemark = (id) => {
		dispatch(delRemarks(id));
	};

	return (
		<div className="flex flex-col justify-center items-center h-[90vh]">
			<Remarks
				remarksData={remarksData}
				handlePostRemark={handlePostRemark}
				handleUpdateRemark={handleUpdateRemark}
				handleDelRemark={handleDelRemark}
			/>
		</div>
	);
};

export default Main;
