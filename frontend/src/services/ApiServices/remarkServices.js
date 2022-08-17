import http from "../httpServices/httpServices";
import config from "../config.json";
import { toast } from "react-toastify";

const endpoint = config.apiEndpoint + "/remarks";

export async function getRemarks() {
	try {
		const { data } = await http.get(endpoint);
		return data.data;
	} catch (error) {
		return [];
	}
}

export async function postRemark(req) {
	try {
		const { data } = await http.post(endpoint, req);
		toast.success("Remark Added Successfully !!!", { autoClose: 1000 });
		return data;
	} catch (error) {
		return [];
	}
}

export async function putRemark(id, req) {
	try {
		const { data } = await http.put(`${endpoint}/${id}`, req);
		toast.success("Remark Updated Successfully !!!", { autoClose: 1000 });
		return data;
	} catch (error) {
		return [];
	}
}

export async function delRemark(id) {
	try {
		const { data } = await http.delete(`${endpoint}/${id}`);
		toast.success("Remark Deleted Successfully !!!", { autoClose: 1000 });
		return data;
	} catch (error) {
		return [];
	}
}
