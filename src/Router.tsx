// libraries
import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error404 from "./components/Error404/Error404";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

// lazy loading imports
import Spinner from "./components/Spinner/Spinner";
import Home from "./pages/Home/Home";

const About = lazy(() => import("./pages/About/About.tsx"));
const Services = lazy(() => import("./pages/Services/Services.tsx"));
const Blog = lazy(() => import("./pages/Blog/Blog.tsx"));
const Register = lazy(() => import("./pages/auth/Register/Register.tsx"));
const Login = lazy(() => import("./pages/auth/Login/Login.tsx"));
const Contact = lazy(() => import("./pages/Contact/Contact.tsx"));
const PasswordReset = lazy(() => import("./pages/auth/PasswordReset/PasswordReset.tsx"));
const PasswordResetLink = lazy(() => import("./pages/auth/PasswordResetLink/PasswordResetLink.tsx"));
const Stripe = lazy(() => import("./pages/auth/Stripe/Stripe.tsx"));
const StripeSuccess = lazy(() => import("./pages/auth/StripeSuccess/StripeSuccess.tsx"));
const CheckBookings = lazy(() => import("./pages/CheckBookings/CheckBookings.tsx"));
const BookSession = lazy(() => import("./pages/BookSession/BookSession.tsx"));
const BlogSinglePage = lazy(() => import("./pages/BlogSinglePage/BlogSinglePage.tsx"));
const Account = lazy(() => import("./pages/Account/Account.tsx"));

const Router: React.FC = () => {
	return (
		<>
			<BrowserRouter>
				<Suspense fallback={<Spinner />}>
					<Routes>
						{/* public */}
						<Route path="/" element={<Home />} />
						<Route path="/services" element={<Services />} />
						<Route path="/blog" element={<Blog />} />
						<Route path="/blog/post/:id" element={<BlogSinglePage />} />
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
				</Suspense>
			</BrowserRouter>
		</>
	);
};

export default Router;
