import s from "./Footer.module.scss";

type Props = {};

export default function Footer({}: Props) {
	return (
		<footer className={s.footer}>
			<div className={s.footerContent}>
				<div className={s.pagesWrapper}>
					<span>Pages</span>
					<ul>
						<li>Home</li>
						<li>Services</li>
						<li>About</li>
						<li>Login</li>
						<li>Register</li>
					</ul>
				</div>
				<div className={s.contactWrapper}>
					<span>Contact</span>
					<ul>
						<li>+43 660 501 8669 </li>
						<li>contact.joyfulcoaching@gmail.com </li>
						<li>Instagram</li>
						<li>LinkedIn</li>
					</ul>
				</div>
			</div>
			<hr />
			<div className={s.copyrightContainer}>
				<div className={s.logoContainer}>
					<span>Copyright &copy; by</span>
					<img src="http://127.0.0.1:5173/assets/logo.svg" alt="" className={s.footerLogo} />
					<span className={s.logoText}>Joyful Coaching {new Date().getFullYear()}. </span>
				</div>
			</div>
		</footer>
	);
}
