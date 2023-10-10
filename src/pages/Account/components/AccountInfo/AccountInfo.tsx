import { useEffect, useState } from "react";
import HeaderH3 from "../../../../components/HeadingH3/HeadingH3";
import Spinner from "../../../../components/Spinner/Spinner";
import { ActionTypes } from "../../../../context/Actions";
import { useGeneralContext } from "../../../../context/GeneralContext";
import useFetchAxios from "../../../../hooks/useFetchAxios";
import AccountPasswordChange from "../AccountPasswordChange/AccountPasswordChange";
import s from "./AccountInfo.module.scss";

type Props = {};

type AccountInfoT = {
	id: number;
	email: string;
	password: string;
	role: string;
	appointments: number;
};

export default function AccountInfo({}: Props) {
	// const [userInfo, setUserInfo] = useState(null);
	const [password, setPassword] = useState("");

	const {
		state: { backendApiDevelopmentUrl, self, showPopupWindow },
		dispatch,
	} = useGeneralContext();

	let url = `${backendApiDevelopmentUrl}/users/account`;
	const { response, error, isLoading } = useFetchAxios<AccountInfoT>(url, "Post", { token: self.token }, self.token);

	useEffect(() => {
		if (response) {
			setPassword(response.password);
		}
	}, [response]);

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
					<span className={s.infoEmailText}>{response?.email}</span>
				</span>
			</span>
			<hr className={s.line} />

			<span className={s.infoContainer}>
				<span className={s.infoWrapper}>
					<span className={s.infoPlaceholder}>Password: </span>
					<input type={"password"} value={password} className={s.inputPassword} disabled />
					<span className={s.modifierText} onClick={handlerPasswordChange}>
						Change
					</span>
				</span>
			</span>

			<hr className={s.line} />

			<span className={s.infoContainer}>
				<span className={s.infoWrapper}>
					<span className={s.infoPlaceholder}>Available sessions: </span>
					<span className={s.infoEmailText}>{response?.appointments}</span>
					<span className={s.modifierText}>Buy sessions</span>
				</span>
			</span>
			{showPopupWindow && <AccountPasswordChange />}
		</div>
	);
}
