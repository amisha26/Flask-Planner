import React from "react";
import { Alert } from "@mui/material";

const InputField = ({
	handleChange,
	autoComplete = "off",
	placeholder,
	type,
	name,
	message,
	show,
	label,
	severity,
	handleAlertChange,
	value,
	labelCheck,
}) => {
	const inputClassName =
		"form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";
	return (
		<>
			<input
				className={inputClassName}
				type={type}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				autoComplete={autoComplete}
				spellCheck={false}
			/>
			{message && show && label === labelCheck && (
				<Alert onClose={handleAlertChange} severity={severity}>
					{message}
				</Alert>
			)}
		</>
	);
};

export default InputField;
