import { Link } from "react-router-dom";
import HeaderH3 from "../../HeadingH3/HeadingH3";
import s from "./Success.module.scss";
type Props = {};

export default function Success({}: Props) {
	return (
		<div className={s.successContainer}>
			<div className={s.successWrapper}>
				<img src="http://127.0.0.1:5173/assets/cheked.svg" alt="" className={s.successIcon} />
				<HeaderH3 className={s.successText}>Your account has been created successfully!</HeaderH3>
				<Link to="/user/login" className={s.successLink}>
					<div className={s.linkFlex}>
						<span className={s.linkText}>Go to login</span>
						<img src="http://127.0.0.1:5173/assets/right-arrow.svg" alt="" className={s.arrowIcon} />
					</div>
				</Link>
			</div>
		</div>
	);
}
