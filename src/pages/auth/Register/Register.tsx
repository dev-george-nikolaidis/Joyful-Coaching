import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { MdRemoveRedEye } from "react-icons/md";
import { Link } from "react-router-dom";

import ReCAPTCHA from "react-google-recaptcha";
import Close from "../../../components/Close/Close";
import HeaderH3 from "../../../components/HeadingH3/HeadingH3";
import HeaderH4 from "../../../components/HeadingH4/HeadingH4";
import Logo from "../../../components/Logo/Logo";
import Modal from "../../../components/Modal/Modal";
import RegisterButton from "../../../components/RegisterButton/RegisterButton";
import Spinner from "../../../components/Spinner/Spinner";
import { useGeneralContext } from "../../../context/GeneralContext";
import { registerUserSchema } from "../../../utils/helpers";
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
	const [showPassword, setShowPassword] = useState(false);
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
		const postData = async () => {
			const token = captchaRef.current.getValue();
			const registerUserPayload = {
				email: formData.email,
				password: formData.password,
				token: token,
			};

			const request = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(registerUserPayload),
			};

			try {
				// dispatch({type:ActionTypes.TOGGLE_LOADING ,payload:true})
				setIsloading(true);
				const res = await fetch(`${backendApiDevelopmentUrl}/users/register`, request);
				const data = await res.json();

				setIsloading(false);
				if (data.name === "ZodError") {
					//Todo handle zodErrors
					setErrorReCaptcha(true);
					return;
				}

				if (data.name === "fail") {
					setErrorReCaptcha(true);
					return;
				}

				// Error handling
				if (data.message) {
					setErrorMessageBackend("Email is already taken.");
					return;
				}

				if (data && !data.message && data !== "fail") {
					setIsUserCreated(true);
					setIsBackendError(false);
					setIsloading(false);
					setErrorReCaptcha(false);
					captchaRef.current.reset();
					setErrorMessageBackend("");
					reset();
					return;
				}
			} catch (err: any) {
				setIsloading(false);
				setIsBackendError(true);
				setErrorMessageBackend("Server is not responding, please try again");
			}
		};
		postData();
	};

	return (
		<Modal>
			{isLoading && <Spinner />}
			<section className={s.register}>
				<Logo className={s.logoImg} />
				{isUserCreated && <HeaderH3 className={s.successMessage}>Your account has been created successfully!</HeaderH3>}
				<form action="#" className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<HeaderH4>Sign Up</HeaderH4>
					<div className={s.formControl}>
						<label htmlFor="Email">Email address*</label>
						<input type="email" {...register("email")} />
					</div>
					{errors.email ? <span className={s.error}>{errors.email.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}

					<div className={s.formControl}>
						<label htmlFor="Password">Password*</label>
						<div className={s.inputPasswordContainer}>
							{showPassword ? (
								<MdRemoveRedEye className={`${s.eyeIcon} ${s.eyeHide}`} onClick={() => setShowPassword(!showPassword)} />
							) : (
								<MdRemoveRedEye className={`${s.eyeIcon} ${s.eyeShow}`} onClick={() => setShowPassword(!showPassword)} />
							)}
							<input type={showPassword ? "text" : "password"} {...register("password")} />
						</div>
					</div>
					{errors.password ? <span className={s.error}>{errors.password.message}</span> : isBackendError && <span className={s.error}>{}</span>}

					{/* <div className={s.formControl}>
						<label htmlFor="Password repeat">Password repeat*</label>
						<div className={s.inputPasswordContainer}>
							{showPasswordRepeat ? (
								<img src={EyeShow} alt="" className={s.eyeIcon} onClick={() => handlerPasswordClick("passwordRepeat")} />
							) : (
								<img src={EyeHide} alt="" className={s.eyeIcon} onClick={() => handlerPasswordClick("passwordReapet")} />
							)}

							<input type={showPasswordRepeat ? "text" : "password"} {...register("password_repeat")} />
						</div>
					</div>
					{errors.password_repeat ? <span className={s.error}>{errors.password_repeat.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>} */}
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
