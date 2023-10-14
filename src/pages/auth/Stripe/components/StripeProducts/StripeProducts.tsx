import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import sessionPacketImg from "../../../../../assets/img/session-packet.png";
import HeaderH3 from "../../../../../components/HeadingH3/HeadingH3";
import HeaderH4 from "../../../../../components/HeadingH4/HeadingH4";
import LoginButton from "../../../../../components/LoginButton/LoginButton";
import Modal from "../../../../../components/Modal/Modal";
import { ActionTypes } from "../../../../../context/Actions";
import { useGeneralContext } from "../../../../../context/GeneralContext";
import { fetchAxios } from "../../../../../utils/helpers";
import s from "./StripeProducts.module.scss";

type Props = {};
export default function StripeProducts({}: Props) {
	const {
		state: { backendApiDevelopmentUrl, self, sessionPacket },
		dispatch,
	} = useGeneralContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (!sessionPacket) {
			setInterval(() => {
				navigate("/");
			}, 4);
		}
	});

	const handlerClick = (e: React.MouseEvent<HTMLSpanElement>) => {
		e.preventDefault();

		const url = `${backendApiDevelopmentUrl}/appointments/buy`;

		fetchAxios(url, "POST", { sessionPacket: sessionPacket }, self.token)
			.then((r) => {
				dispatch({ type: ActionTypes.PROCESSING_PAYMENT });
				localStorage.setItem("session_id", JSON.stringify(r.data.session_id));
				if (r.data.url) {
					window.location.href = r.data.url;
				}
			})
			.catch((e) => {});
	};

	return (
		<Modal>
			<section className={s.product}>
				<img src={sessionPacketImg} alt={sessionPacket?.service} className={s.sessionPacketImg} />
				<div className={s.textContainer}>
					<HeaderH3 className={s.title}> Packet: {sessionPacket?.level} </HeaderH3>
					<HeaderH4 className={s.price}>Cost: {sessionPacket?.price}</HeaderH4>
				</div>
				<span onClick={(e) => handlerClick(e)}>
					<LoginButton>Checkout</LoginButton>
				</span>
			</section>
		</Modal>
	);
}
