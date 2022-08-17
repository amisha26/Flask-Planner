import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, (error) => {
	const expectedError =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500;
	if (!expectedError) {
		console.log("Error Has Been Occured");
		toast.error("Error Occurred - 500", { autoClose: 1200 });
	}

	return Promise.reject(error);
});

const obj = {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
};

export default obj;
