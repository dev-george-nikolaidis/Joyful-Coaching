import { Link, useSearchParams } from "react-router-dom";
import Spinner from "../../../components/Spinner/Spinner";
import { useGeneralContext } from "../../../context/GeneralContext";
import useFetchAxios from "../../../hooks/useFetchAxios";
import style from "./StripeSuccess.module.scss";

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
		<div className={style.successPage}>
			{isLoading && <Spinner />}
			<div className={style.successContainer}>
				<div className={style.successContent}>
					<h1 className={style.successTitle}>Thank You!</h1>
					<p className={style.successMessage}>Your purchase was successful.</p>
					<Link to="/" className={style.backToHomeLink}>
						Continue
					</Link>
				</div>
			</div>
		</div>
	);
}
