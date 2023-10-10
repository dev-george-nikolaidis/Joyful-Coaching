// libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import About from "./pages/About/About";
import Account from "./pages/Account/Account";
import Blog from "./pages/Blog/Blog";
import Booking from "./pages/Booking/Booking";
import BookSession from "./pages/Booking/components/BookSession/BookSession";
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
					<Route element={<ProtectedRoutes path="/user/login" />}>
						<Route path="/booking" element={<Booking />} />
						<Route path="/account-settings" element={<Account />} />
						<Route path="/booking/check-date" element={<BookSession />} />
					</Route>

					<Route path="*" element={<div>Error</div>} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
