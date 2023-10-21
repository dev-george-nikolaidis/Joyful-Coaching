import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Close from "../../../components/Close/Close";
import HeaderH4 from "../../../components/HeaderH4/HeaderH4.";
import Input from "../../../components/Input/Input";
import LoginButton from "../../../components/LoginButton/LoginButton";
import Logo from "../../../components/Logo/Logo";
import Modal from "../../../components/Modal/Modal";
import Spinner from "../../../components/Spinner/Spinner";
import { ActionTypes } from "../../../context/Actions";
import { useGeneralContext } from "../../../context/GeneralContext";
import { fetchAxios, passwordResetLoginSchema } from "../../../utils/helpers";
import s from "./PasswordResetLink.module.scss";

type Props = {};

type resetPasswordLogin = {
	password: string;
};
export default function PasswordResetLink({}: Props) {
	const [isLoading, setIsloading] = useState(false);
	const query = new URLSearchParams(window.location.search);
	const [isBackendError, setIsBackendError] = useState(false);
	const [errorMessageBackend, setErrorMessageBackend] = useState("");
	const navigate = useNavigate();

	const {
		state: { backendApiDevelopmentUrl },
		dispatch,
	} = useGeneralContext();
	const token = query.get("token");

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<resetPasswordLogin>({
		resolver: yupResolver(passwordResetLoginSchema),
	});
	const onSubmit = (formData: resetPasswordLogin) => {
		setIsloading(true);
		const url = `${backendApiDevelopmentUrl}/users/password-rest-login`;

		fetchAxios(url, "PUT", { password: formData.password, token: token }, token!)
			.then((p) => {
				const { data } = p;

				setIsloading(false);

				if (data.Invalid || data.zodErrors) {
					setIsBackendError(true);
					setErrorMessageBackend(data.invalid);
				}

				if (data.token) {
					localStorage.setItem("self", JSON.stringify(data));
					dispatch({ type: ActionTypes.GET_SELF, payload: data });
					setIsBackendError(false);
					setErrorMessageBackend("");
					navigate("/");
				}
			})
			.catch((error) => {});
	};

	return (
		<Modal>
			{isLoading && <Spinner />}
			<section className={s.passwordResetLogin}>
				<Logo className={s.logoImg} />
				<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<HeaderH4>New password </HeaderH4>
					<Input label="Password" propFunc={{ ...(register("password") as any) }} withShow={true} type="password" />
					{errors.password ? <span className={s.error}>{errors.password.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}
					<LoginButton>Login</LoginButton>
				</form>
				<Close />
			</section>
		</Modal>
	);
}
