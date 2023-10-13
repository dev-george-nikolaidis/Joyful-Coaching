import { Link } from "react-router-dom";
import HeaderH3 from "../../../../components/HeadingH3/HeadingH3";
import Spinner from "../../../../components/Spinner/Spinner";
import { ActionTypes } from "../../../../context/Actions";
import { useGeneralContext } from "../../../../context/GeneralContext";
import useFetchAxios from "../../../../hooks/useFetchAxios";
import AccountPasswordChange from "../AccountPasswordChange/AccountPasswordChange";
import s from "./AccountInfo.module.scss";

type Props = {};

export interface Root {
	userTable: UserTable;
	appointmentsTable: AppointmentsTable[];
}

export interface UserTable {
	id: number;
	email: string;
	password: string;
	role: string;
	appointments: number;
	created_on: string;
	updated_on: string;
}

export interface AppointmentsTable {
	id: number;
	date: string;
	appointment: number;
	user_id: number;
}

export default function AccountInfo({}: Props) {
	const {
		state: { backendApiDevelopmentUrl, self, showPopupWindow },
		dispatch,
	} = useGeneralContext();

	let url = `${backendApiDevelopmentUrl}/users/account`;
	const { response, error, isLoading } = useFetchAxios<Root>(url, "Post", { token: self.token }, self.token);
	console.log(response);
	const handlerPasswordChange = () => {
		dispatch({ type: ActionTypes.TOGGLE_POPUP_MODAL });
	};

	return (
		<div className={s.accountInfo}>
			{isLoading && self && <Spinner />}
			<HeaderH3 className={s.accountTitle}>Account</HeaderH3>
			<hr className={s.line} />
			<span className={s.infoContainer}>
				<span className={s.infoWrapper}>
					<span className={s.infoPlaceholder}>Email: </span>
					<span className={s.infoEmailText}>{response?.userTable.email}</span>
				</span>
			</span>
			<hr className={s.line} />

			<span className={s.infoContainer}>
				<span className={s.infoWrapper}>
					<span className={s.infoPlaceholder}>Password: </span>
					<input type={"password"} value={response?.userTable.password || ""} className={s.inputPassword} disabled />
					<span className={s.modifierText} onClick={handlerPasswordChange}>
						Change
					</span>
				</span>
			</span>

			<hr className={s.line} />

			<span className={s.infoContainer}>
				<span className={s.infoWrapper}>
					<span className={s.infoPlaceholder}>Available sessions: </span>
					<span className={s.infoEmailText}>{response?.userTable.appointments}</span>
					<Link to="/services" className={s.modifierText}>
						Buy sessions
					</Link>
				</span>
			</span>
			{showPopupWindow && <AccountPasswordChange />}
		</div>
	);
}
