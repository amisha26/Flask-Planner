import React, { useState } from "react";
import { dropDownData } from "../DummyData/Data";
import { RemarkModal, DropDown } from "..";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

// MUI
import {
	Divider,
	ListItem,
	ListItemText,
	Tooltip,
	IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Remark = ({
	remarksData,
	handlePostRemark,
	handleUpdateRemark,
	handleDelRemark,
}) => {
	// ============ Handling State ===============
	const [open, setOpen] = useState(false);
	const [id, setId] = useState("");
	const [remarkModalTitle, setRemarkModalTitle] = useState("");
	const [input, setInput] = useState("");
	const [formData, setFormData] = useState({
		study: "coding",
		day: "monday",
	});

	// ============ Event Handlers ===============
	const handleModal = (val, name) => {
		setOpen(val);
		setRemarkModalTitle(name);
		setInput("");
		setFormData({
			study: "coding",
			day: "monday",
		});
	};

	const handleEdit = (name, val, text, remarkStudy, remarkDay, id) => {
		const study = "study";
		const day = "day";
		handleModal(val, name);
		setFormData({ ...formData, [study]: remarkStudy, [day]: remarkDay });
		setInput(text);
		setId(id);
	};

	const handleChange = ({ target }) => {
		//console.log(target.name, target.value);
		setFormData({ ...formData, [target.name]: target.value });
	};

	const handleChangeRemark = (e) => {
		//console.log(e.target.value);
		setInput(e.target.value);
	};

	const handleSubmit = () => {
		//console.log({ ...formData, remark: input });
		if (remarkModalTitle === "Edit Remark") {
			handleUpdateRemark(id, { ...formData, remark: input });
		} else {
			handlePostRemark({ ...formData, remark: input });
		}

		setInput("");
		setFormData({
			study: "coding",
			day: "monday",
		});
	};

	const handleDelete = (id) => {
		confirmAlert({
			title: "Confirm to submit",
			message: "Are you sure to do this.",
			buttons: [
				{
					label: "Yes",
					onClick: () => handleDelRemark(id),
				},
				{
					label: "No",
				},
			],
		});
	};

	return (
		<div className="border rounded-2xl lg-mr-6 bg-white shadow-md p-3 w-[30rem]">
			{/* Remarks Header*/}
			<div className="flex flex-row justify-between items-center h-[4rem]">
				<div className="flex justify-center items-center w-[100%]">
					<p className="font-semibold text-xl my-1">Remarks</p>
				</div>
			</div>
			<Divider />
			{/* Remarks Items*/}
			<div className="min-h-[2rem] max-h-[14em] overflow-auto w-[100%]">
				{remarksData &&
					remarksData.map((item) => (
						<div key={item.id}>
							<ListItem alignItems="flex-start">
								<ListItemText
									primary={item.day}
									secondary={
										<>
											<span className="inline font-bold capitalize">
												{item.study}
											</span>
											<span className="inline mx-1 whitespace-pre-line">
												- {item.remark}
											</span>
										</>
									}
								/>
								<Tooltip placement="top" title="edit">
									<IconButton
										onClick={() =>
											handleEdit(
												"Edit Remark",
												true,
												item.remark,
												item.study,
												item.day,
												item.id
											)
										}
									>
										<EditIcon color="primary" />
									</IconButton>
								</Tooltip>
								<Tooltip placement="top" title="delete">
									<IconButton
										onClick={() => handleDelete(item.id)}
									>
										<DeleteIcon color="error" />
									</IconButton>
								</Tooltip>
							</ListItem>
							<Divider />
						</div>
					))}
				{remarksData && remarksData.length === 0 && (
					<div className="flex justify-center items-center min-h-[5rem] w-[100%]">
						No Remarks To Show
					</div>
				)}
			</div>
			<RemarkModal
				open={open}
				handleModal={handleModal}
				remarkModalTitle={remarkModalTitle}
				input={input}
				handleChangeRemark={handleChangeRemark}
				handleSubmit={handleSubmit}
				dropDown={dropDownData?.map((item, index) => (
					<DropDown
						key={index}
						label={item.label}
						width={100}
						id={item.id}
						handleChange={handleChange}
						value={formData[item.id]}
						options={item.options}
					/>
				))}
			/>
		</div>
	);
};

export default Remark;
