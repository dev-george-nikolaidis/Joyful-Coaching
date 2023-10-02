// libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Register from "./pages/auth/Register/Register";

const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/blog/:id" element={<Blog />} />
					<Route path="/about" element={<About />} />
					<Route path="/register" element={<Register />} />
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
