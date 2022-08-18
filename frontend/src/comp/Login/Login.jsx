import React, { useState } from "react";
import Joi from "joi";

import { Navigate } from "react-router-dom";
import { InputField } from "../";
import { CircularProgress } from "@mui/material";

const Login = ({ handleLogin, isAuth, loginLoading }) => {
	//========================== State Hooks ================================

	const [form, setForm] = useState({ userId: "", password: "" });

	const [error, setError] = useState({
		message: undefined,
		show: false,
		label: "",
	});

	//========================== Joi Schema ==================================

	const schema = Joi.object({
		userId: Joi.string().required().min(6).label("Username"),
		password: Joi.string().required().min(4).label("Password"),
	});

	//======================== Event Handlers Start ==========================

	const handleChange = (e) => {
		const name = e.target.name;
		setForm({ ...form, [name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(form);
		const { error } = schema.validate(form, { allowUnknown: true });
		if (error) {
			return setError({
				message: error.message,
				show: true,
				label: error.details[0].context.label,
			});
		}
		handleLogin(form);
		if (isAuth) {
			setForm({ userId: "", password: "" });
		}
	};

	const handleAlertChange = () => {
		setError({ message: error.message, show: false });
	};

	//========================== Event Handlers End ================================

	if (isAuth) return <Navigate to="/" replace={true} />;
	return (
		<div className="w-full flex justify-center">
			<section className="h-[80vh] w-[80%]">
				<div className="px-6 h-full text-gray-800">
					<div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
						<div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
							<img
								src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
								className="w-full"
								alt=""
							/>
						</div>
						<div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
							<form onSubmit={handleSubmit}>
								{/* Username */}
								<div className="mb-6">
									<InputField
										handleChange={handleChange}
										placeholder="Username"
										type="text"
										name="userId"
										value={form.userId}
										message={error.message}
										show={error.show}
										label={error.label}
										severity="error"
										handleAlertChange={handleAlertChange}
										labelCheck="Username"
									/>
								</div>
								{/* Password */}
								<div className="mb-6">
									<InputField
										handleChange={handleChange}
										placeholder="Password"
										type="password"
										name="password"
										value={form.password}
										message={error.message}
										show={error.show}
										label={error.label}
										severity="error"
										handleAlertChange={handleAlertChange}
										labelCheck="Password"
									/>
								</div>

								<div className="flex justify-between items-center mb-6">
									<div className="form-group form-check">
										<input
											type="checkbox"
											className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
											id="exampleCheck2"
										/>
										<label className="form-check-label inline-block text-gray-800">
											Remember me
										</label>
									</div>
								</div>
								{/* Button */}
								<div className="text-center lg:text-left">
									<button
										type="submit"
										className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
									>
										Login
										{loginLoading && (
											<CircularProgress
												sx={{ color: "white" }}
												size={14}
												className="ml-2"
											/>
										)}
									</button>
									<p className="text-sm font-semibold mt-2 pt-1 mb-0">
										Don't have an account ?{" "}
										<a
											href="#!"
											className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
										>
											Register
										</a>
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Login;