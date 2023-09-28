// libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					{/*
					<Route path="/user/register" element={<Register />} />
					<Route path="/user/login" element={<Login />} />
					<Route path="/media/movies/filter" element={<Movies_filter />} />
					<Route path="/media/movie/:id" element={<SingleMoviePage />} />
					<Route path="/person/:id" element={<SinglePersonPage />} />
					<Route path="/media/movies" element={<Movies />} />
					<Route path="/media/bookmarked" element={<Bookmarked />} /> */}
					<Route path="*" element={<div>Error</div>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
