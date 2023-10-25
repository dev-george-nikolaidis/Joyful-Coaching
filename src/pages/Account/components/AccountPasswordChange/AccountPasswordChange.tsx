import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import Close from "../../../../components/Close/Close";
import HeaderH3 from "../../../../components/HeaderH3/HeaderH3";
import LoginButton from "../../../../components/LoginButton/LoginButton";
import Modal from "../../../../components/Modal/Modal";
import Spinner from "../../../../components/Spinner/Spinner";
import { ActionTypes } from "../../../../context/Actions";
import { useGeneralContext } from "../../../../context/GeneralContext";
import { fetchAxios, updatePasswordSchema } from "../../../../utils/helpers";
import s from "./AccountPasswordChange.module.scss";

type Props = {};

export default function AccountPasswordChange({}: Props) {
	const [showPassword, setShowPassword] = useState(false);
	const [password, setPass] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isPasswordUpdated, setIsPasswordUpdated] = useState(false);

	const {
		state: { backendApiUrl, self },
		dispatch,
	} = useGeneralContext();

	const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPass(e.currentTarget.value);
		setIsLoading(false);
	};

	const handlerPasswordChange = () => {
		updatePasswordSchema
			.validate({ password: password })
			.then((_val) => {
				setErrorMessage("");
				setIsLoading(true);
				fetchAxios(`${backendApiUrl}/users/password-update`, "PUT", { password: password }, self.token)
					.then((r) => {
						const self = {
							token: r.data,
						};
						localStorage.setItem("self", JSON.stringify(self));
						setIsPasswordUpdated(true);
						setIsLoading(false);
						setIsPasswordUpdated(true);
						setPass("");

						return;
					})
					.catch((_e) => {});
			})
			.catch((err) => {
				setErrorMessage(err.message);
			});
	};

	const handleCloseClick = () => {
		dispatch({ type: ActionTypes.TOGGLE_POPUP_MODAL });
	};
	return (
		<Modal className={s.popupModal}>
			{isLoading && <Spinner />}

			<div className={s.popupModalContainer}>
				<div className={s.inputWrapper}>
					<HeaderH3 className={s.popupModalTitle}>Please enter the new password.</HeaderH3>
					{isPasswordUpdated && <HeaderH3 className={s.successMessage}>Your password has been updated successfully!</HeaderH3>}
					<div className={s.inputIconContainer}>
						<input type={showPassword ? "text" : "password"} value={password} className={s.inputPassword} onChange={(e) => onChangePassword(e)} />
						{showPassword ? (
							<MdRemoveRedEye className={`${s.eyeIcon} ${s.eyeHide}`} onClick={() => setShowPassword(!showPassword)} />
						) : (
							<MdRemoveRedEye className={`${s.eyeIcon} ${s.eyeShow}`} onClick={() => setShowPassword(!showPassword)} />
						)}
					</div>
					{errorMessage && <span className={s.errorMessage}>{errorMessage}</span>}
				</div>
				<div onClick={handlerPasswordChange} className={s.btnWrapper}>
					<LoginButton className={s.btnModifier}>Update</LoginButton>
				</div>

				<span onClick={handleCloseClick}>
					<Close redirect={false} />
				</span>
			</div>
		</Modal>
	);
}
