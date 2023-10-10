import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import s from "./Close.module.scss";

type Props = {
	redirect?: boolean;
	path?: string;
};

export default function Close({ redirect, path }: Props) {
	const redirectToHome = () => {
		if (redirect === false) {
			return;
		}
		navigate(path ? path : "/");
	};
	let navigate = useNavigate();
	return (
		<span className={s.linkClose} onClick={redirectToHome}>
			<MdOutlineClose className={s.linkIconClose} />
		</span>
	);
}
