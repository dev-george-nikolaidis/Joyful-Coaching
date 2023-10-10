import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Close from "../../../../components/Close/Close";
import HeaderH3 from "../../../../components/HeadingH3/HeadingH3";
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
	const { dispatch } = useGeneralContext();
	const [errorMessage, setErrorMessage] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isPasswordUpdated, setIsPasswordUpdated] = useState(false);
	const navigate = useNavigate();
	const {
		state: { backendApiDevelopmentUrl, self },
	} = useGeneralContext();

	const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
		setPass(e.currentTarget.value);
		setIsLoading(false);
	};

	const handlerPasswordChange = () => {
		updatePasswordSchema
			.validate({ password: password })
			.then((val) => {
				setErrorMessage("");
				setIsLoading(true);
				fetchAxios(`${backendApiDevelopmentUrl}/users/password-update`, "Post", { password: password }, self.token)
					.then((r) => {
						localStorage.removeItem("self");
						setIsPasswordUpdated(true);
						setIsLoading(false);
						setIsPasswordUpdated(true);
						// dispatch({ type: ActionTypes.TOGGLE_POPUP_MODAL });
						dispatch({ type: ActionTypes.UPDATE_PASSWORD });
						// dispatch({ type: ActionTypes.LOGOUT });
						// navigate("/user/login");
						return;
					})
					.catch((e) => {});
			})
			.catch((err) => {
				setErrorMessage(err.message);
			});
		// dispatch({ type: ActionTypes.OPEN_CLOSE_MODAL });
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
