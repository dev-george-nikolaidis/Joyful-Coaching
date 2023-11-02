import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonCancel from "../../../../../components/ButtonCancel/ButtonCancel";
import HeaderH3 from "../../../../../components/HeaderH3/HeaderH3";
import HeaderH4 from "../../../../../components/HeaderH4/HeaderH4.";
import LoginButton from "../../../../../components/LoginButton/LoginButton";
import Modal from "../../../../../components/Modal/Modal";
import { ActionTypes } from "../../../../../context/Actions";
import { useGeneralContext } from "../../../../../context/GeneralContext";
import { fetchAxios } from "../../../../../utils/helpers";
import s from "./StripeProducts.module.scss";

type Props = {};
export default function StripeProducts({}: Props) {
	const {
		state: { backendApiUrl, self, sessionPacket },
		dispatch,
	} = useGeneralContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (!sessionPacket) {
			navigate("/");
		}
	});

	function handlerClickCancel() {
		navigate("/");
	}

	const handlerClick = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.preventDefault();

		const url = `${backendApiUrl}/appointments/buy`;

		fetchAxios(url, "POST", { sessionPacket: sessionPacket }, self.token)
			.then((r) => {
				// jwt expired error handling
				if (r.data.tokenExpiredError) {
					dispatch({ type: ActionTypes.LOGOUT, payload: { token: "" } });
				}

				dispatch({ type: ActionTypes.PROCESSING_PAYMENT });
				localStorage.setItem("session_id", JSON.stringify(r.data.session_id));
				if (r.data.url) {
					window.location.href = r.data.url;
				}
			})
			.catch((_err) => {});
	};

	return (
		<Modal>
			<section className={s.product}>
				<img
					src="https://res.cloudinary.com/dsrzlxnkc/image/upload/v1697880142/Joyful%20Coaching/session-packet_ag84qf.webp"
					alt={sessionPacket?.service}
					className={s.sessionPacketImg}
				/>
				<div className={s.textContainer}>
					<HeaderH3 className={s.title}> Packet: {sessionPacket?.level} </HeaderH3>
					<HeaderH4 className={s.price}>Cost: {sessionPacket?.price}</HeaderH4>
				</div>
				<span onClick={(e) => handlerClick(e)}>
					<LoginButton>Checkout</LoginButton>
				</span>
				<span onClick={handlerClickCancel} className={s.btnCancelWrapper}>
					<ButtonCancel>Cancel</ButtonCancel>
				</span>
			</section>
		</Modal>
	);
}
