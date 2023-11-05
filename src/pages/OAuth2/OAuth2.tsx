import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import Spinner from "../../components/Spinner/Spinner";
import { ActionTypes } from "../../context/Actions";
import { useGeneralContext } from "../../context/GeneralContext";
import { fetchAxios } from "../../utils/helpers";
import s from "./OAuth2.module.scss";

type Props = {};

export default function OAuth2({}: Props) {
	const [searchParams] = useSearchParams();
	const [isLoading, setIsloading] = useState(false);

	const navigate = useNavigate();
	const {
		state: { backendApiUrl },
		dispatch,
	} = useGeneralContext();

	useEffect(() => {
		const token = searchParams.get("token")?.toString();
		const url = `${backendApiUrl}/auth/token`;
		if (token) {
			fetchAxios(url, "POST", null, token)
				.then((p) => {
					setIsloading(false);
					if (p.data.legitToken) {
						document.body.style.overflow = "auto";
						localStorage.setItem("self", JSON.stringify({ token: token }));
						dispatch({ type: ActionTypes.GET_SELF });
						navigate("/");
					}
				})
				.catch((_e) => {
					navigate("/");
				});
		}
		return () => {};
	}, []);

	return <Modal className={s.test}>{isLoading && <Spinner />}</Modal>;
}
