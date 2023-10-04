import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/img/logo.svg";

import HeaderH4 from "../../components/HeadingH4/HeadingH4";
import LoginButton from "../../components/LoginButton/LoginButton";
import Modal from "../../components/Modal/Modal";
import { useGeneralContext } from "../../context/GeneralContext";
import { contactSchema } from "../../utils/helpers";
import s from "./Contact.module.scss";

type Props = {};

type UserSubmitForm = {
	name: string;
	email: string;
	textarea: string;
};

export default function Contact({}: Props) {
	const [isLoading, setIsloading] = useState(false);
	const [isBackendError, setIsBackendError] = useState(false);
	const [errorMessageBackend, setErrorMessageBackend] = useState("");
	let navigate = useNavigate();
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
	} = useForm<UserSubmitForm>({
		resolver: yupResolver(contactSchema),
	});

	// Handle onSubmit
	const onSubmit = (formData: UserSubmitForm) => {};

	const redirectToHome = () => {
		navigate("/");
	};

	return (
		<Modal>
			<section className={s.contact}>
				<img src={Logo} alt="" className={s.logoImg} />
				<form action="#" className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<HeaderH4>Contact us</HeaderH4>

					<div className={s.formControl}>
						<label htmlFor="Name">Name*</label>
						<input type="email" {...register("email")} />
					</div>
					{errors.name ? <span className={s.error}>{errors.name.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}

					<div className={s.formControl}>
						<label htmlFor="Email">Email address*</label>
						<input type="email" {...register("email")} />
					</div>
					{errors.email ? <span className={s.error}>{errors.email.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}

					<div className={s.formControl}>
						<label htmlFor="Message">Message*</label>
						<textarea {...register("textarea")} className={s.textarea} />
					</div>
					{errors.textarea ? <span className={s.error}>{errors.textarea.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}

					<LoginButton>Send message</LoginButton>
				</form>

				<span className={s.linkClose} onClick={redirectToHome}>
					<MdOutlineClose className={s.linkIconClose} />
				</span>
			</section>
		</Modal>
	);
}
