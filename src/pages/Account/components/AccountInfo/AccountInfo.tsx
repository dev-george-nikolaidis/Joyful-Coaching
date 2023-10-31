import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HeaderH3 from "../../../../components/HeaderH3/HeaderH3";
import Spinner from "../../../../components/Spinner/Spinner";
import { ActionTypes } from "../../../../context/Actions";
import { useGeneralContext } from "../../../../context/GeneralContext";
import { fetchAxios } from "../../../../utils/helpers";
import AccountAppointments from "../AccountAppointments/AccountAppointments";
import AccountPasswordChange from "../AccountPasswordChange/AccountPasswordChange";
import s from "./AccountInfo.module.scss";

type Props = {};

export default function AccountInfo({}: Props) {
	const [refetch, setRefetch] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const {
		state: { backendApiUrl, self, showPopupWindow, accountInfoPayload, refreshToken },
		dispatch,
	} = useGeneralContext();

	let url = `${backendApiUrl}/users/account`;
	useEffect(() => {
		setIsLoading(true);

		const refreshUrl = `${backendApiUrl}/auth/refresh-token`;
		fetchAxios(refreshUrl, "POST", { refreshToken: refreshToken }, self)
			.then((d) => {
				let currentDate = new Date();
				const decodedToken = jwtDecode(self);
				console.log(decodedToken.exp!);
				console.log(decodedToken.exp! * 1000 < currentDate.getTime());
				//   localStorage.setItem("self",)
				fetchAxios(url, "POST", { token: self }, self)
					.then((payload) => {
						setIsLoading(false);
						setRefetch(false);
						dispatch({ type: ActionTypes.FETCH_ACCOUNT_PAYLOAD, payload: payload.data });
					})
					.catch((_err) => {
						setIsLoading(false);
					});
			})
			.catch((e) => {
				console.log(e);
			});

		return () => {};
	}, [refetch]);

	const handlerPasswordChange = () => {
		dispatch({ type: ActionTypes.TOGGLE_POPUP_MODAL });
	};

	return (
		<div className={s.accountInfo}>
			{isLoading && self && <Spinner />}
			<HeaderH3 className={s.accountTitle}>Account</HeaderH3>
			<hr className={s.line} />
			<div className={s.infoContainer}>
				<span className={s.infoWrapper}>
					<span className={s.infoPlaceholder}>Email: </span>
					<span className={s.infoEmailText}>{accountInfoPayload?.userTable.email}</span>
				</span>
			</div>
			<hr className={s.line} />
			<div className={s.infoContainer}>
				<span className={s.infoWrapper}>
					<span className={s.infoPlaceholder}>Password: </span>
					<input type="password" value={accountInfoPayload?.userTable.password || ""} className={s.inputPassword} disabled />
					<span className={s.modifierText} onClick={handlerPasswordChange}>
						Change
					</span>
				</span>
			</div>
			<hr className={s.line} />
			<div className={s.infoContainer}>
				<span className={s.infoWrapper}>
					<span className={s.infoPlaceholder}>Available sessions: </span>
					<span className={s.infoEmailText}>{accountInfoPayload?.userTable.appointments}</span>
					<Link to="/services" className={s.modifierText}>
						Buy sessions
					</Link>
				</span>
			</div>
			<hr className={s.line} />

			<AccountAppointments setRefetch={setRefetch} setIsLoading={setIsLoading} />
			{showPopupWindow && <AccountPasswordChange />}
		</div>
	);
}
