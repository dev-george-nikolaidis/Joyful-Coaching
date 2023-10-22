import { useState } from "react";
import { MdArticle, MdDesignServices, MdHome, MdLogin, MdManageAccounts, MdOutlineContactMail, MdOutlineInfo, MdOutlineLogout, MdOutlineMenu, MdQueue } from "react-icons/md";
import { Link } from "react-router-dom";
import { ActionTypes } from "../../../context/Actions";
import { useGeneralContext } from "../../../context/GeneralContext";
import s from "./HamburgerMenu.module.scss";

type Props = {};
export default function HamburgerMenu({}: Props) {
	const [isOpen, setIsOpen] = useState(false);
	const {
		state: { self },
		dispatch,
	} = useGeneralContext();

	const logout = () => {
		dispatch({ type: ActionTypes.LOGOUT, payload: { token: "" } });
	};
	return (
		<div className={s.hamburgerMenu}>
			<MdOutlineMenu className={s.hamburgerIcon} onClick={() => setIsOpen(!isOpen)} />
			{isOpen && (
				<>
					<div className={s.listWrapper}>
						<ul className={s.list}>
							{self && (
								<>
									<li className={s.linkItem}>
										<Link to="/booking" className={s.accountLink}>
											<MdHome className={s.accountSettingIcon} />
											<span className={s.accountModalText}>Book Session</span>
										</Link>
									</li>
									<hr className={s.modalLine} />
								</>
							)}

							{!self && (
								<>
									<li className={s.linkItem}>
										<Link to="/user/login" className={s.accountLink}>
											<MdLogin className={s.accountSettingIcon} />
											<span className={s.accountModalText}>Login</span>
										</Link>
									</li>
									<hr className={s.modalLine} />
									<li className={s.linkItem}>
										<Link to="/user/register" className={s.accountLink}>
											<MdQueue className={s.accountSettingIcon} />
											<span className={s.accountModalText}>Register</span>
										</Link>
									</li>
									<hr className={s.modalLine} />
								</>
							)}

							<li className={s.linkItem}>
								<Link to="/services" className={s.accountLink}>
									<MdDesignServices className={s.accountSettingIcon} />
									<span className={s.accountModalText}>services</span>
								</Link>
							</li>
							<hr className={s.modalLine} />
							<li className={s.linkItem}>
								<Link to="/" className={s.accountLink}>
									<MdHome className={s.accountSettingIcon} />
									<span className={s.accountModalText}>Home</span>
								</Link>
							</li>
							<hr className={s.modalLine} />
							<li className={s.linkItem}>
								<Link to="/blog" className={s.accountLink}>
									<MdArticle className={s.accountSettingIcon} />
									<span className={s.accountModalText}>Blog</span>
								</Link>
							</li>
							<hr className={s.modalLine} />
							<li className={s.linkItem}>
								<Link to="/about" className={s.accountLink}>
									<MdOutlineInfo className={s.accountSettingIcon} />
									<span className={s.accountModalText}>About</span>
								</Link>
							</li>
							<hr className={s.modalLine} />
							<li className={s.linkItem}>
								<Link to="/contact" className={s.accountLink}>
									<MdOutlineContactMail className={s.accountSettingIcon} />
									<span className={s.accountModalText}>Contact</span>
								</Link>
							</li>

							{self && (
								<>
									<hr className={s.modalLine} />
									<li className={s.linkItem}>
										<Link to="/account-settings" className={s.accountLink}>
											<MdManageAccounts className={s.accountSettingIcon} />
											<span className={s.accountModalText}>Dashboard</span>
										</Link>
									</li>
									<hr className={s.modalLine} />
									<li className={s.linkItem}>
										<div className={s.accountLink} onClick={logout}>
											<MdOutlineLogout className={s.accountSettingIcon} />
											<span className={s.accountModalText}>Logout</span>
										</div>
									</li>
								</>
							)}
						</ul>
					</div>
				</>
			)}
		</div>
	);
}
