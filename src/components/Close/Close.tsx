import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import s from "./Close.module.scss";

type Props = {};

export default function Close({}: Props) {
	const redirectToHome = () => {
		navigate("/");
	};
	let navigate = useNavigate();
	return (
		<span className={s.linkClose} onClick={redirectToHome}>
			<MdOutlineClose className={s.linkIconClose} />
		</span>
	);
}
