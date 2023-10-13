import { useSearchParams } from "react-router-dom";
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
	//
	// useEffect(() => {

	// 	return () => {
	// 		setIsLoading(true);
	// 		const session_id = localStorage.getItem("session_id");

	// 		fetchAxios(url, "Post", { session_id: JSON.parse(session_id as string) }, self.token)
	// 			.then((r) => {
	// 				setIsLoading(false);
	// 				console.log(r);
	// 				localStorage.removeItem("session_id");
	// 			})
	// 			.catch((e) => {
	// 				setIsLoading(false);
	// 			});
	// 	};
	// }, []);

	return (
		<div className={s.test}>
			{isLoading && <Spinner />}
			Payment was a success
		</div>
	);
}
