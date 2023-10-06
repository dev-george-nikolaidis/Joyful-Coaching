// libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Booking from "./pages/Booking/Booking";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Login from "./pages/auth/Login/Login";
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
					<Route path="/user/register" element={<Register />} />
					<Route path="/user/login" element={<Login />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/booking" element={<Booking />} />

					<Route path="*" element={<div>Error</div>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
