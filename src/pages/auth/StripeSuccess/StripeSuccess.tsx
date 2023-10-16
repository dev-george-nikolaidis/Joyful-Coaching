import { Link, useSearchParams } from "react-router-dom";
import LoginButton from "../../../components/LoginButton/LoginButton";
import Spinner from "../../../components/Spinner/Spinner";
import { useGeneralContext } from "../../../context/GeneralContext";
import useFetchAxios from "../../../hooks/useFetchAxios";
import s from "./StripeSuccess.module.scss";

type Props = {};

export default function StripeSuccess({}: Props) {
	const [searchParams] = useSearchParams();

	const {
		state: { backendApiDevelopmentUrl, self },
	} = useGeneralContext();

	const url = `${backendApiDevelopmentUrl}/appointments/confirm`;
	const session_id = localStorage.getItem("session_id");

	const { response, error, isLoading } = useFetchAxios(url, "POST", { session_id: JSON.parse(session_id as string) }, self.token);
	if (response === "Update was a success!") {
		localStorage.removeItem("session_id");
	}

	return (
		<div className={s.successPage}>
			{isLoading && <Spinner />}
			<div className={s.successContainer}>
				<div className={s.successContent}>
					<h1 className={s.successTitle}>Thank You!</h1>
					<p className={s.successMessage}>Your purchase was successful.</p>
					<Link to="/" className={s.backToHomeLink}>
						<LoginButton className={s.btn}>Continue</LoginButton>
					</Link>
				</div>
			</div>
		</div>
	);
}
