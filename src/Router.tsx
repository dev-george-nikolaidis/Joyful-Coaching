// libraries
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/Error404/Error404";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

import About from "./pages/About/About";
import Account from "./pages/Account/Account";
import Blog from "./pages/Blog/Blog";
import BookSession from "./pages/BookSession/BookSession";
import CheckBookings from "./pages/CheckBookings/CheckBookings";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Login from "./pages/auth/Login/Login";
import PasswordReset from "./pages/auth/PasswordReset/PasswordReset";
import PasswordResetLink from "./pages/auth/PasswordResetLink/PasswordResetLink";
import Register from "./pages/auth/Register/Register";
import Stripe from "./pages/auth/Stripe/Stripe";
import StripeSuccess from "./pages/auth/StripeSuccess/StripeSuccess";

const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* public */}
					<Route path="/" element={<Home />} />
					<Route path="/services" element={<Services />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/blog/:id" element={<Blog />} />
					<Route path="/about" element={<About />} />
					<Route path="/user/register" element={<Register />} />
					<Route path="/user/login" element={<Login />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/user/password-rest" element={<PasswordReset />} />
					<Route path="/user/enter-new-password" element={<PasswordResetLink />} />

					{/* Protected */}
					<Route element={<ProtectedRoutes path="/" withPayment={true} />}>
						<Route path="/checkout-success/" element={<StripeSuccess />} />
					</Route>
					<Route element={<ProtectedRoutes path="/" withSession={true} />}>
						<Route path="/booking/appointments" element={<BookSession />} />
					</Route>
					<Route element={<ProtectedRoutes path="/user/login" />}>
						<Route path="/booking" element={<CheckBookings />} />
						<Route path="/account-settings" element={<Account />} />
						<Route path="/appointment-buy" element={<Stripe />} />
						<Route path="/checkout-success" element={<StripeSuccess />} />
					</Route>
					{/* Error */}
					<Route path="*" element={<Error404 />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
