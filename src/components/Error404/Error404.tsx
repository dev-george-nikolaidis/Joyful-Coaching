import { Link } from "react-router-dom";
import style from "./Error404.module.scss";

type Props = {};

export default function Error404({}: Props) {
	return (
		<div className={style.errorPage}>
			<div className={style.errorContainer}>
				<div className={style.errorContent}>
					<h1 className={style.errorTitle}>404</h1>
					<p className={style.errorMessage}>Oops! Page not found</p>
					<Link to="/" className={style.backLink}>
						Go back to home
					</Link>
				</div>
			</div>
		</div>
	);
}
