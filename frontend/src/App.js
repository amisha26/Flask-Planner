import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, Login, ProtectedRoute } from "./comp";
import {
	postLogins,
	getUserLogin,
	getLoading,
	loading,
} from "./redux/loginSlice/loginSlice";
import { LinearProgress } from "@mui/material";

function App() {
	//==================== Redux Call =========================

	const dispatch = useDispatch();
	const isAuth = useSelector(getUserLogin);
	const loginLoading = useSelector(getLoading);

	//==================== Event Handlers =========================

	const handleLogin = (req) => {
		dispatch(postLogins(req));
		dispatch(loading());
		console.log(loginLoading);
	};

	// login props
	const loginProps = {
		isAuth,
		loginLoading,
		handleLogin,
	};

	return (
		<div>
			<ToastContainer />
			{loginLoading && <LinearProgress />}
			<Navbar />
			{/* Routes */}
			<Routes>
				{/* Protected Route */}
				<Route path="/" element={<ProtectedRoute isAuth={isAuth} />}>
					<Route path="/" element={<Main />} />
				</Route>
				<Route path="/login" element={<Login {...loginProps} />} />
				{/* Page Not Found */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
