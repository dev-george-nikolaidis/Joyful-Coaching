import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import HeaderH4 from "../../../components/HeadingH4/HeadingH4";
import Modal from "../../../components/Modal/Modal";
import RegisterButton from "../../../components/RegisterButton/RegisterButton";
import { useGeneralContext } from "../../../context/GeneralContext";
import { registerUserSchema } from "../../../utils/helpers";
import s from "./Register.module.scss";

type Props = {};

type RegisterUserT = {
	email: string;
	password: string;
	password_repeat: string;
};

export default function Register({}: Props) {
	const [isLoading, setIsloading] = useState(false);
	const [isBackendError, setIsBackendError] = useState(false);
	const [errorMessageBackend, setErrorMessageBackend] = useState("");
	const {
		state: {},
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
	} = useForm<RegisterUserT>({
		resolver: yupResolver(registerUserSchema),
	});

	// Handle onSubmit
	const onSubmit = (formData: RegisterUserT) => {};

	return (
		<Modal>
			<section className={s.register}>
				<form action="#" className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<HeaderH4>Sign Up</HeaderH4>
					<div className={s.formControl}>
						<input type="email" placeholder="Email address " {...register("email")} />
					</div>
					{errors.email ? <span className={s.error}>{errors.email.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}
					<div className={s.form_control}>
						<input type="password" placeholder="Password" {...register("password")} />
					</div>
					{errors.password ? <span className={s.error}>{errors.password.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}
					<div className={s.form_control}>
						<input type="password" placeholder="Repeat password" {...register("password_repeat")} />
					</div>
					{errors.password_repeat ? <span className={s.error}>{errors.password_repeat.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}
					<RegisterButton>Create an account</RegisterButton>
				</form>
				<div className={s.linkContainer}>
					<span className={s.spanLinkText}>Already have an account?</span>
					<Link to="/user/login" className={s.linkText}>
						Login
					</Link>
				</div>
			</section>
			;
		</Modal>
	);
}
