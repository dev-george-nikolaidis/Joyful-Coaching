import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import HeaderH4 from "../../../components/HeaderH4/HeaderH4.";
import Input from "../../../components/Input/Input";
import LoginButton from "../../../components/LoginButton/LoginButton";
import Logo from "../../../components/Logo/Logo";
import Modal from "../../../components/Modal/Modal";
import Spinner from "../../../components/Spinner/Spinner";
import Navigation from "../../../components/layout/Navigation/Navigation";
import { ActionTypes } from "../../../context/Actions";
import { useGeneralContext } from "../../../context/GeneralContext";
import { fetchAxios, loginUserSchema } from "../../../utils/helpers";
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
	let navigate = useNavigate();
	const {
		state: { backendApiUrl },
		dispatch,
	} = useGeneralContext();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginUserT>({
		resolver: yupResolver(loginUserSchema),
	});

	// Handle onSubmit
	const onSubmit = (formData: LoginUserT) => {
		const loginUserPayload = {
			email: formData.email,
			password: formData.password,
		};
		setIsloading(true);
		dispatch({ type: ActionTypes.OPEN_CLOSE_MODAL });
		const url = `${backendApiUrl}/users/login`;
		fetchAxios(url, "POST", loginUserPayload)
			.then((p) => {
				const { data } = p;
				dispatch({ type: ActionTypes.OPEN_CLOSE_MODAL });
				setIsloading(false);
				if (data.zodErrors) {
					setIsBackendError(true);
					setErrorMessageBackend("Invalid credentials");
					return;
				}

				if (data.Invalid) {
					setIsBackendError(true);
					setErrorMessageBackend("Invalid credentials");
					return;
				}

				if (data.token) {
					document.body.style.overflow = "auto";
					localStorage.setItem("self", JSON.stringify(data));
					dispatch({ type: ActionTypes.GET_SELF });
					setIsBackendError(false);
					setErrorMessageBackend("");
					navigate("/");
				}
			})
			.catch((r) => {
				setIsloading(false);
				dispatch({ type: ActionTypes.OPEN_CLOSE_MODAL });
				setIsBackendError(true);
				if (r.message === "Failed to fetch") {
					setErrorMessageBackend("Server is not responding, please try again");
				} else {
					setErrorMessageBackend("Invalid credentials");
				}
			});
	};

	return (
		<Modal>
			<div className={` ${s.loginWrapper} col-12`}>
				<Navigation />
				{isLoading && <Spinner />}
				<section className={s.login}>
					<Logo className={s.logoImg} />
					<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
						<HeaderH4>Login</HeaderH4>

						<Input label="Email" type="email" propFunc={register("email") as any} />
						{errors.email ? <span className={s.error}>{errors.email.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}

						<Input label="Password" propFunc={register("password") as any} withShow={true} type="password" />
						{errors.password ? <span className={s.error}>{errors.password.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}

						<LoginButton>Login</LoginButton>
					</form>
					<div className={s.linkContainer}>
						<span className={s.spanLinkText}>Need an account ?</span>
						<Link to="/user/register" className={s.linkText}>
							Sign Up
						</Link>
					</div>
					<div className={s.linkContainer}>
						<span className={s.spanLinkText}> Forgot your password ?</span>
						<Link to="/user/password-rest" className={s.linkText}>
							Reset password
						</Link>
					</div>
					{/* <Close /> */}
				</section>
			</div>
		</Modal>
	);
}
