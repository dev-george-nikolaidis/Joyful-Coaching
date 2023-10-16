import { Link } from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";
import s from "./Error404.module.scss";

type Props = {};

export default function Error404({}: Props) {
	return (
		<div className={s.errorPage}>
			<div className={s.errorContainer}>
				<div className={s.errorContent}>
					<h1 className={s.errorTitle}>404</h1>
					<p className={s.errorMessage}>Oops! Page not found</p>
					<Link to="/" className={s.backLink}>
						<LoginButton className={s.btn}> Go back to home</LoginButton>
					</Link>
				</div>
			</div>
		</div>
	);
}
