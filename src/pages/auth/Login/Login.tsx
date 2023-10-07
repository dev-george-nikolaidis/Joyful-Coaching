import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdRemoveRedEye } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import Close from "../../../components/Close/Close";
import HeaderH4 from "../../../components/HeadingH4/HeadingH4";
import LoginButton from "../../../components/LoginButton/LoginButton";
import Logo from "../../../components/Logo/Logo";
import Modal from "../../../components/Modal/Modal";
import Spinner from "../../../components/Spinner/Spinner";
import { ActionTypes } from "../../../context/Actions";
import { useGeneralContext } from "../../../context/GeneralContext";
import { loginUserSchema } from "../../../utils/helpers";
import s from "./Login.module.scss";

type Props = {};

type LoginUserT = {
	email: string;
	password: string;
};

export default function Login({}: Props) {
	const [isLoading, setIsloading] = useState(false);
	const [isBackendError, setIsBackendError] = useState(false);
	const [errorMessageBackend, setErrorMessageBackend] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	let navigate = useNavigate();
	const {
		state: { backendApiDevelopmentUrl },
		dispatch,
	} = useGeneralContext();

	const {
		register,
		handleSubmit,
		reset,
		getFieldState,
		getValues,
		setError,
		watch,
		formState: { errors },
	} = useForm<LoginUserT>({
		resolver: yupResolver(loginUserSchema),
	});

	// Handle onSubmit
	const onSubmit = (formData: LoginUserT) => {
		const postData = async () => {
			const loginUserPayload = {
				email: formData.email,
				password: formData.password,
			};

			const request = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(loginUserPayload),
			};

			try {
				setIsloading(true);
				const res = await fetch(`${backendApiDevelopmentUrl}/users/login`, request);
				const data = await res.json();

				// Error Handling
				if (data.message || data.name === "ZodError") {
					setIsloading(false);
					setIsBackendError(true);
					setErrorMessageBackend("Invalid credentials");
					return;
				}

				if (data && data.name !== "ZodError") {
					localStorage.setItem("self", JSON.stringify(data));
					dispatch({ type: ActionTypes.GET_SELF, payload: data });
					setIsBackendError(false);
					setIsloading(false);
					setErrorMessageBackend("");
					navigate("/");
				}
			} catch (err: any) {
				setIsloading(false);
				setIsBackendError(true);
				if (err.message === "Failed to fetch") {
					setErrorMessageBackend("Server is not responding, please try again");
				} else {
					setErrorMessageBackend("Invalid credentials");
				}
			}
		};
		postData();
	};

	return (
		<Modal>
			{isLoading && <Spinner />}
			<section className={s.login}>
				<Logo className={s.logoImg} />
				<form action="#" className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<HeaderH4>Login</HeaderH4>
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
					{errors.password ? <span className={s.error}>{errors.password.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}

					<LoginButton>Login</LoginButton>
				</form>
				<div className={s.linkContainer}>
					<span className={s.spanLinkText}>Need an account? </span>
					<Link to="/user/register" className={s.linkText}>
						Sign Up
					</Link>
				</div>
				<Close />
			</section>
		</Modal>
	);
}
