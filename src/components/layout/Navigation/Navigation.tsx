import { NavLink } from "react-router-dom";

import { ActionTypes } from "../../../context/Actions";
import { useGeneralContext } from "../../../context/GeneralContext";
import s from "./Navigation.module.scss";
type Props = {};

export default function Navigation({}: Props) {
	const {
		state: { theme },
		dispatch,
	} = useGeneralContext();

	const handlerTheme = () => {
		localStorage.setItem("theme", theme === "light" ? "dark" : "light");
		dispatch({ type: ActionTypes.TOGGLE_THEME, payload: theme === "light" ? "dark" : "light" });
	};

	return (
		<header className={s.header}>
			<nav className={s.nav}>
				<NavLink to="/" end className={s.navLogoWrapper}>
					<img src="http://127.0.0.1:5173/assets/logo.svg" alt="" />
					<span className={s.logoText}>Joyful Coaching</span>
				</NavLink>

				<ul className={s.navList}>
					<li onClick={handlerTheme}> {theme}</li>
					<li>
						<NavLink to="/" end className={({ isActive }) => (isActive ? ` ${s.active} ${s.link} ` : `  ${s.inactive} ${s.link} `)}>
							<span> Home</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/services" end className={({ isActive }) => (isActive ? ` ${s.active} ${s.link} ` : `  ${s.inactive} ${s.link}`)}>
							<span>Buy Session</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/booking" end className={({ isActive }) => (isActive ? ` ${s.active} ${s.link} ` : `  ${s.inactive} ${s.link}`)}>
							<span>Book Session</span>
						</NavLink>
					</li>

					<li>
						<NavLink to="/blog" end className={({ isActive }) => (isActive ? ` ${s.active} ${s.link}   ` : `  ${s.inactive} ${s.link}`)}>
							<span>Blog</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" end className={({ isActive }) => (isActive ? ` ${s.active} ${s.link} ` : `  ${s.inactive} ${s.link}`)}>
							<span>About</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/contact" end className={({ isActive }) => (isActive ? ` ${s.active} ${s.link} ` : `  ${s.inactive} ${s.link}`)}>
							<span>Contact</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/user/login" end className={({ isActive }) => (isActive ? ` ${s.active} ${s.link} ` : `  ${s.inactive} ${s.link}`)}>
							<span>Login</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/user/register" end className={({ isActive }) => (isActive ? ` ${s.active} ${s.link} ` : `  ${s.inactive} ${s.link}`)}>
							<span>Register</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
