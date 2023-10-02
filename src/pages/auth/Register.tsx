// Libraries
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
// import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { registerUserSchema } from "../../utils/helpers";

// Local
import { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import { useGeneralContext } from "../../context/GeneralContext";
import styles from "./register.module.scss";

type RegisterUser = {
	email: string;
	password: string;
	password_repeat: string;
};
type Props = {};

export default function Register({}: Props) {
	const {
		state: {},
		dispatch,
	} = useGeneralContext();

	const [success, setSuccess] = useState(false);
	const [isError, setIsError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");
	const [questionError, setQuestionError] = useState("");
	const [isLoading, setIsloading] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		getFieldState,
		getValues,
		setError,
		watch,
		formState: { errors },
	} = useForm<RegisterUser>({
		resolver: yupResolver(registerUserSchema),
	});

	const onSubmit = (formData: RegisterUser) => {
		const postData = async () => {
			// prettier-ignore
			const registerUserPayload = {
				name: formData.email,
				email: formData.email,
				password: formData.password,
				confirm_password: formData.password_repeat
			};

			// prettier-ignore
			const request = {
				method: "POST",
				 headers: { "Content-Type": "application/json", "Accept": "application/json, text-plain,/"},
				body: JSON.stringify(registerUserPayload),
			};

			// 	try {
			// 		dispatch({ type: ActionTypes.TOGGLE_LOADING, payload: true });

			// 		const res = await fetch(`${BACKEND_URL}/user/register`, request);
			// 		const data = await res.json();
			// 		dispatch({ type: ActionTypes.TOGGLE_LOADING, payload: false });
			// 		if (data.user) {
			// 			// console.log(data.jwt)

			// 			// console.log(data.data.token);
			// 			setSuccess(true);
			// 			setErrorMessage("");
			// 			return;
			// 		}

			// 		if (data.message) {
			// 			// console.log(data.message);
			// 			let message = "Email  already exist";
			// 			setIsError(true);
			// 			setErrorMessage(message);
			// 		}
			// 	} catch (err: any) {
			// 		let message = "Email  already exist";
			// 		setIsError(true);
			// 		setErrorMessage(message);
			// 		setTimeout(() => {
			// 			setShakeError(true);
			// 		}, 100);

			// 		setErrorMessage(message);
			// 		dispatch({ type: ActionTypes.TOGGLE_LOADING, payload: false });
			// 	}
			// };

			postData();
		};

		if (success) {
			document.body.style.overflow = "hidden";
		}

		const handlerClick = () => {
			document.body.style.overflow = "auto";
		};

		let successWindow = (
			<>
				<div className={styles.register_modal_container}></div>
				<div className={styles.content_modal_container}>
					<p className={styles.success_text}>Your account has been successfully registered!</p>
					<Link to="/user/login" className={styles.btn_success_login} onClick={handlerClick}>
						Login
					</Link>
				</div>
			</>
		);

		return (
			<section className={styles.register}>
				{success && successWindow}
				{isLoading && <Spinner />}
				<div className={styles.wrapper}>
					<form action="#" className={styles.form} onSubmit={handleSubmit(onSubmit)}>
						<h2 className={styles.section_title}>Sign Up</h2>
						<div className={styles.form_control}>
							<input type="email" placeholder="Email address" {...register("email")} />
						</div>
						{errors.email ? (
							<span className={styles.error}>{errors.email.message}</span>
						) : isError ? (
							<span className={styles.error}>{errorMessage}</span>
						) : (
							<span className={styles.error}></span>
						)}

						<div className={styles.form_control}>
							<input type="password" placeholder="Password" {...register("password")} />
						</div>
						{errors.password ? <span className={styles.error}>{errors.password.message}</span> : <span className={styles.error}></span>}
						<div className={styles.form_control}>
							<input type="password" placeholder="Repeat password" {...register("password_repeat")} />
						</div>
						{errors.password_repeat ? <span className={styles.error}>{errors.password_repeat.message}</span> : <span className={styles.error}></span>}
						<button>register</button>
					</form>
					<div className={styles.link_container}>
						<span className={styles.span_link_text}>Already have an account?</span>
						<Link to="/user/login" className={styles.link_text}>
							Login
						</Link>
					</div>
				</div>
			</section>
		);
	};
}
