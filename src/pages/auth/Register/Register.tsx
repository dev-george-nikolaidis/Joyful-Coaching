import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import ReCAPTCHA from "react-google-recaptcha";
import Close from "../../../components/Close/Close";
import HeaderH3 from "../../../components/HeadingH3/HeadingH3";
import HeaderH4 from "../../../components/HeadingH4/HeadingH4";
import Input from "../../../components/Input/Input";
import Logo from "../../../components/Logo/Logo";
import Modal from "../../../components/Modal/Modal";
import RegisterButton from "../../../components/RegisterButton/RegisterButton";
import Spinner from "../../../components/Spinner/Spinner";
import { useGeneralContext } from "../../../context/GeneralContext";
import { fetchAxios, registerUserSchema } from "../../../utils/helpers";
import s from "./Register.module.scss";

type Props = {};

type RegisterUserT = {
	email: string;
	password: string;
	// password_repeat: string;
};

export default function Register({}: Props) {
	const [isLoading, setIsloading] = useState(false);
	const [isBackendError, setIsBackendError] = useState(false);
	const [errorMessageBackend, setErrorMessageBackend] = useState("");
	const [errorReCaptcha, setErrorReCaptcha] = useState(false);
	const [isUserCreated, setIsUserCreated] = useState(false);
	const captchaRef = useRef<any>(null);
	const {
		state: { backendApiDevelopmentUrl },
		dispatch,
	} = useGeneralContext();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<RegisterUserT>({
		resolver: yupResolver(registerUserSchema),
	});

	// Handle onSubmit
	const onSubmit = (formData: RegisterUserT) => {
		const token = captchaRef.current.getValue();
		const registerUserPayload = {
			email: formData.email,
			password: formData.password,
			token: token,
		};

		const url = `${backendApiDevelopmentUrl}/users/register`;
		fetchAxios(url, "POST", registerUserPayload)
			.then((p) => {
				const { data } = p;
				setIsloading(false);

				if (data.failToken) {
					setErrorReCaptcha(true);
					return;
				}
				if (data.zodErrors) {
					// setIsBackendError(true);
					setErrorReCaptcha(true);
					setErrorMessageBackend("Invalid credentials");
					return;
				}

				if (data.userExist === "User already exist") {
					setIsBackendError(true);
					setErrorMessageBackend("Email is already taken.");
					return;
				}

				if (data.user) {
					setIsUserCreated(true);
					setIsBackendError(false);
					setIsloading(false);
					setErrorReCaptcha(false);
					captchaRef.current.reset();
					setErrorMessageBackend("");
					reset();
					return;
				}
			})
			.catch((error: any) => {
				setIsloading(false);
				setIsBackendError(true);
				setErrorMessageBackend("Server is not responding, please try again");
			});
	};

	return (
		<Modal>
			{isLoading && <Spinner />}
			<section className={s.register}>
				<Logo className={s.logoImg} />
				{isUserCreated && <HeaderH3 className={s.successMessage}>Your account has been created successfully!</HeaderH3>}
				<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<HeaderH4>Sign Up</HeaderH4>
					<Input label="Email" placeholder="Email" type="email" propFunc={...register("email") as any} />
					{errors.email ? <span className={s.error}>{errors.email.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}

					<Input label="Password" placeholder="Password" propFunc={{ ...(register("password") as any) }} withShow={true} type="password" />
					{errors.password ? <span className={s.error}>{errors.password.message}</span> : isBackendError && <span className={s.error}>{}</span>}

					<div className={s.reCaptchaWrapper}>
						<ReCAPTCHA ref={captchaRef} sitekey="6Ld5E58oAAAAAF2oplor2tX0v8uzezWzXIMjbEfd" />
					</div>
					{errorReCaptcha && <span className={s.error}>Please check the reCAPTCHA</span>}
					<RegisterButton>Create an account</RegisterButton>
				</form>
				<div className={s.linkContainer}>
					<span className={s.spanLinkText}>Already have an account? </span>
					<Link to="/user/login" className={s.linkText}>
						Login
					</Link>
				</div>
				<Close />
			</section>
		</Modal>
	);
}
