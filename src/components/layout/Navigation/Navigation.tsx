import { useState } from "react";
import { MdAccountCircle, MdArrowDropDown, MdManageAccounts, MdOutlineLogout, MdToggleOff, MdToggleOn } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ActionTypes } from "../../../context/Actions";
import { useGeneralContext } from "../../../context/GeneralContext";
import s from "./Navigation.module.scss";

type Props = {};

export default function Navigation({}: Props) {
	const [showAccountModal, setShowAccountModal] = useState(false);
	const {
		state: { theme, self },
		dispatch,
	} = useGeneralContext();
	const toggleTheme = () => {
		localStorage.setItem("theme", theme === "Light" ? "Dark" : "Light");
		dispatch({ type: ActionTypes.TOGGLE_THEME, payload: theme === "Light" ? "Dark" : "Light" });
	};

	const logout = () => {
		dispatch({ type: ActionTypes.LOGOUT, payload: { token: "" } });
	};

	return (
		<header className={s.header}>
			<nav className={s.nav}>
				<NavLink to="/" end className={s.navLogoWrapper}>
					<img src="http://127.0.0.1:5173/assets/logo.svg" alt="" />
					<span className={s.logoText}>Joyful Coaching</span>
				</NavLink>

				<ul className={s.navList}>
					<li onClick={toggleTheme} className={s.toggleThemeContainer}>
						{theme === "Dark" ? <MdToggleOn className={`${s.themeLight} ${s.themeIcon}`} /> : <MdToggleOff className={`${s.themeLight} ${s.themeIcon}`} />}
						<span className={s.themeText}>{theme}</span>
					</li>
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
					{!self ? (
						<>
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
						</>
					) : (
						<>
							<li className={s.accountContainer} onClick={() => setShowAccountModal(!showAccountModal)}>
								<MdAccountCircle className={s.accountIconUser} />
								<span className={s.accountText}>Account</span>
								<MdArrowDropDown className={s.accountIconArrow} />
								{showAccountModal && (
									<ul className={s.accountListModal}>
										<li className={s.accountLink}>
											<MdManageAccounts className={s.accountSettingIcon} />
											<span className={s.accountModalText}>Settings</span>
										</li>
										<li className={s.accountLink}>
											<MdManageAccounts className={s.accountSettingIcon} />
											<span className={s.accountModalText}>Settings</span>
										</li>
										<li className={s.accountLink}>
											<MdManageAccounts className={s.accountSettingIcon} />
											<span className={s.accountModalText}>Settings</span>
										</li>
										<hr className={s.modalLine} />
										<li className={`${s.accountLinkLogout} ${s.accountLink}`} onClick={logout}>
											<MdOutlineLogout className={s.accountSettingIcon} />
											<span className={s.accountModalText}>Logout</span>
										</li>
									</ul>
								)}
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
}
