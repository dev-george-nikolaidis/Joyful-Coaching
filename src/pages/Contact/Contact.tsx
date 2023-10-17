import { yupResolver } from "@hookform/resolvers/yup";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

import ReCAPTCHA from "react-google-recaptcha";
import HeaderH3 from "../../components/HeadingH3/HeadingH3";
import HeaderH4 from "../../components/HeadingH4/HeadingH4";
import Input from "../../components/Input/Input";
import LoginButton from "../../components/LoginButton/LoginButton";
import Logo from "../../components/Logo/Logo";
import Modal from "../../components/Modal/Modal";
import Spinner from "../../components/Spinner/Spinner";
import Footer from "../../components/layout/Footer/Footer";
import Navigation from "../../components/layout/Navigation/Navigation";
import { useGeneralContext } from "../../context/GeneralContext";
import { contactSchema, fetchAxios } from "../../utils/helpers";
import s from "./Contact.module.scss";

type Props = {};

type contactSubmitForm = {
	name: string;
	subject: string;
	email: string;
	textarea: string;
};

export default function Contact({}: Props) {
	const captchaRef = useRef<any>(null);
	const [isLoading, setIsloading] = useState(false);
	const [isBackendError, setIsBackendError] = useState(false);
	const [errorMessageBackend, setErrorMessageBackend] = useState("");
	const [success, setSuccess] = useState(false);
	const [errorReCaptcha, setErrorReCaptcha] = useState(false);

	const {
		state: { backendApiDevelopmentUrl },
		dispatch,
	} = useGeneralContext();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<contactSubmitForm>({
		resolver: yupResolver(contactSchema),
	});

	// Handle onSubmit
	const onSubmit = (formData: contactSubmitForm) => {
		const token = captchaRef.current.getValue();

		setIsloading(true);
		const payload = {
			name: formData.name,
			subject: formData.subject,
			email: formData.email,
			textarea: formData.textarea,
			token: token,
		};

		const url = `${backendApiDevelopmentUrl}/contact/contact-us`;

		fetchAxios(url, "POST", payload)
			.then((payload) => {
				setIsloading(false);
				if (payload.data === "fail") {
					captchaRef.current.reset();
					setErrorReCaptcha(true);
					return;
				}

				if (payload.data === "Success") {
					setErrorReCaptcha(false);
					captchaRef.current.reset();
					reset();
					setSuccess(true);
				}
			})
			.catch((error) => {
				setIsloading(false);
			});
	};

	return (
		<Modal className={s.contactModal}>
			<div className={`${s.contactWrapper} col-12`}>
				<Navigation />
				{isLoading && <Spinner />}
				<section className={s.contact}>
					<Logo className={s.logoImg} />
					{success && <HeaderH3 className={s.successMessage}>Your message was successfully delivered!</HeaderH3>}
					<form action="#" className={s.form} onSubmit={handleSubmit(onSubmit)}>
						<HeaderH4>Contact us</HeaderH4>
						<Input label="Name*" type="text" propFunc={...register("name") as any} />
						{errors.name ? <span className={s.error}>{errors.name.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}

						<Input label="Subject*" type="text" propFunc={...register("subject") as any} />
						{errors.subject ? <span className={s.error}>{errors.subject.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}

						<Input label="Email" type="email" propFunc={...register("email") as any} />
						{errors.email ? <span className={s.error}>{errors.email.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}

						<div className={s.formControl}>
							<label htmlFor="Message" className={s.textareaLabel}>
								Message*
							</label>
							<textarea {...register("textarea")} className={s.textarea} />
						</div>
						{errors.textarea ? <span className={s.error}>{errors.textarea.message}</span> : isBackendError && <span className={s.error}>{errorMessageBackend}</span>}
						<div className={s.reCaptchaWrapper}>
							<ReCAPTCHA ref={captchaRef} sitekey="6Ld5E58oAAAAAF2oplor2tX0v8uzezWzXIMjbEfd" />
						</div>
						{errorReCaptcha && <span className={s.error}>Please check the reCAPTCHA</span>}
						<LoginButton>Send message</LoginButton>
					</form>
					{/* <Close /> */}
				</section>
				<Footer />
			</div>
		</Modal>
	);
}
