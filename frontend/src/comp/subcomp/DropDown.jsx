import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDown({
	label = undefined,
	width,
	id,
	value,
	handleChange,
	options,
}) {
	return (
		<div>
			<FormControl
				variant="standard"
				sx={{ marginBottom: 3, minWidth: width, maxWidth: width }}
			>
				{label && (
					<InputLabel id="demo-simple-select-standard-label">
						{label}
					</InputLabel>
				)}
				<Select
					labelId={id}
					id="demo-simple-select-standard"
					value={value}
					onChange={handleChange}
					label={label}
					name={id}
				>
					{options?.map((item, index) => (
						<MenuItem key={index} value={item.value}>
							{item.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}
