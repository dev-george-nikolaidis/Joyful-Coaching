import { NavLink } from "react-router-dom";
import Logo from "../../../assets/img/logo.svg";
import "./Navigation.scss";
type Props = {};

export default function Navigation({}: Props) {
	return (
		<header className="header">
			<nav className="nav">
				<NavLink to="/" end className="navLogoWrapper">
					<img src={Logo} alt="" />
					<span className="logoText">Joyful Coaching</span>
				</NavLink>
				<ul className="navList">
					<li>
						<NavLink to="/" end className={({ isActive }) => (isActive ? ` active ` : ` inactive`)}>
							<span className="link"> Home</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/services" end className={({ isActive }) => (isActive ? ` active ` : ` inactive`)}>
							<span className="link">Services</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/About" end className={({ isActive }) => (isActive ? ` active ` : ` inactive`)}>
							<span className="link">About us</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/my-book" end className={({ isActive }) => (isActive ? ` active ` : ` inactive`)}>
							<span className="link">My ebook</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
