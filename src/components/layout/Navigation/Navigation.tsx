import { NavLink } from "react-router-dom";

import s from "./Navigation.module.scss";
type Props = {};

export default function Navigation({}: Props) {
	return (
		<header className={s.header}>
			<nav className={s.nav}>
				<NavLink to="/" end className={s.navLogoWrapper}>
					<img src="http://127.0.0.1:5173/assets/logo.svg" alt="" />
					<span className={s.logoText}>Joyful Coaching</span>
				</NavLink>
				<ul className={s.navList}>
					<li>
						<NavLink to="/" end className={({ isActive }) => (isActive ? ` ${s.active} ` : `  ${s.inactive}`)}>
							<span className={s.link}> Home</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/services" end className={({ isActive }) => (isActive ? ` ${s.active} ` : `  ${s.inactive}`)}>
							<span className={s.link}>Buy Session</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/my-book" end className={({ isActive }) => (isActive ? ` ${s.active} ` : `  ${s.inactive}`)}>
							<span className={s.link}>Book Session</span>
						</NavLink>
					</li>

					<li>
						<NavLink to="/blog" end className={({ isActive }) => (isActive ? ` ${s.active} ` : `  ${s.inactive}`)}>
							<span className={s.link}>Blog</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" end className={({ isActive }) => (isActive ? ` ${s.active} ` : `  ${s.inactive}`)}>
							<span className={s.link}>About</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/about" end className={({ isActive }) => (isActive ? ` ${s.active} ` : `  ${s.inactive}`)}>
							<span className={s.link}>Contact</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/my-book" end className={({ isActive }) => (isActive ? ` ${s.active} ` : `  ${s.inactive}`)}>
							<span className={s.link}>Login</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/my-book" end className={({ isActive }) => (isActive ? ` ${s.active} ` : `  ${s.inactive}`)}>
							<span className={s.link}>Register</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
