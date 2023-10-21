import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Close from "../../../components/Close/Close";
import HeaderH3 from "../../../components/HeaderH3/HeaderH3";
import HeaderH4 from "../../../components/HeaderH4/HeaderH4.";
import Input from "../../../components/Input/Input";
import LoginButton from "../../../components/LoginButton/LoginButton";
import Logo from "../../../components/Logo/Logo";
import Modal from "../../../components/Modal/Modal";
import Spinner from "../../../components/Spinner/Spinner";
import { useGeneralContext } from "../../../context/GeneralContext";
import { fetchAxios, passwordResetSchema } from "../../../utils/helpers";
import s from "./PasswordReset.module.scss";

type Props = {};

type resetPassword = {
	email: string;
};
export default function PasswordReset({}: Props) {
	const [isLoading, setIsloading] = useState(false);
	const [isBackendError, setIsBackendError] = useState(false);
	const [errorMessageBackend, setErrorMessageBackend] = useState("");
	const [success, setSuccess] = useState(false);
	const {
		state: { backendApiDevelopmentUrl },
	} = useGeneralContext();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<resetPassword>({
		resolver: yupResolver(passwordResetSchema),
	});

	const onSubmit = (formData: resetPassword) => {
		setIsloading(true);
		const url = `${backendApiDevelopmentUrl}/users/password-reset`;
		fetchAxios(url, "Post", { email: formData.email })
			.then((p) => {
				const { data } = p;

				setIsloading(false);

				if (data.zodErrors) {
					setIsBackendError(true);
					setErrorMessageBackend("Invalid credentials");
					return;
				}
				if (data.noUser) {
					setIsBackendError(true);
					setErrorMessageBackend("User not found!");
					return;
				}

				if (data.error) {
					setIsBackendError(true);
					setErrorMessageBackend("Email service provider error");
					return;
				}

				if (data.success) {
					setSuccess(true);
					setIsBackendError(false);
					setErrorMessageBackend("");
					reset();
				}
			})
			.catch((error) => {
				console.log(`line  error  ${error}`);
			});
	};

	return (
		<Modal>
			{isLoading && <Spinner />}
			<section className={s.passwordReset}>
				<Logo className={s.logoImg} />
				{success && <HeaderH3 className={s.successMessage}>Email has been sent,please follow the instructions.</HeaderH3>}
				<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<HeaderH4>Password reset</HeaderH4>
					<Input label="Email" type="email" propFunc={...register("email") as any} />
					{errors.email ? <span className={s.error}>{errors.email.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}
					<LoginButton>Send</LoginButton>
				</form>

				<Close />
			</section>
		</Modal>
	);
}
