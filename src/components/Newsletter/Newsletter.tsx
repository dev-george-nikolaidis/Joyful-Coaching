import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useGeneralContext } from "../../context/GeneralContext";
import { fetchAxios, getRandomNumberBetween, passwordResetSchema } from "../../utils/helpers";
import Button from "../Button/Button";
import HeaderH4 from "../HeaderH4/HeaderH4.";
import Input from "../Input/Input";
import Paragraph400 from "../Paragraph400/Paragraph400";
import s from "./Newsletter.module.scss";

type Props = {};

type newsletterT = {
	email: string;
};

export default function Newsletter({}: Props) {
	const [isBackendError, setIsBackendError] = useState(false);
	const [errorMessageBackend, setErrorMessageBackend] = useState("");
	const [success, setSuccess] = useState(false);
	const {
		state: { backendApiUrl },
	} = useGeneralContext();

	const value1 = getRandomNumberBetween(1, 10);
	const value2 = getRandomNumberBetween(1, 8);
	const total = value1 + value2;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<newsletterT>({
		resolver: yupResolver(passwordResetSchema),
	});

	const onSubmit = (formData: newsletterT) => {
		const promptPayload = window.prompt(`How much is ${value1} + ${value2}`);

		if (promptPayload === "" || promptPayload === null) {
			setIsBackendError(true);
			setErrorMessageBackend("Invalid answer");
			return;
		}

		if (Number(promptPayload) != total) {
			setIsBackendError(true);
			setErrorMessageBackend("Wrong answer,please try again.");
			return;
		}

		const url = `${backendApiUrl}/contact/newsletter`;
		fetchAxios(url, "POST", { email: formData.email })
			.then((p) => {
				const { data } = p;

				setSuccess(false);
				if (data.Invalid || data.zodErrors) {
					setIsBackendError(true);
					setErrorMessageBackend(data.invalid);
				}

				if (data.email) {
					setIsBackendError(true);
					setErrorMessageBackend(data.email);
				}

				if (data.success) {
					setIsBackendError(false);
					setSuccess(true);
					setErrorMessageBackend("");
				}
			})
			.catch((_err) => {});
	};

	return (
		<section className={` ${s.newsletter} col-12 `}>
			<div className={s.newsLetterWrapper}>
				<div className={s.textWrapper}>
					<HeaderH4>Get notified when I publish new articles.</HeaderH4>
					<Paragraph400>Stay up to date with the latest news, announcements, and articles.</Paragraph400>
				</div>
				<form className={s.form} onSubmit={handleSubmit(onSubmit)}>
					<div className={s.formControl}>
						<Input className={s.inputNewsletter} label="Email" type="email" propFunc={register("email") as any} />
						<Button className={s.btnNewsletter}>Subscribe</Button>
					</div>
					{success && <span className={s.successMessage}>You successfully registered in our newsletter</span>}
					{errors.email ? (
						<span className={s.error}>{errors.email.message}</span>
					) : isBackendError ? (
						<span className={s.error}>{errorMessageBackend}</span>
					) : (
						<span className={s.errorPlaceholder}>Error</span>
					)}
				</form>
			</div>
		</section>
	);
}
