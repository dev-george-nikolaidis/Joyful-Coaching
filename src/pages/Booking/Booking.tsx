import { useEffect, useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Close from "../../components/Close/Close";
import HeaderH4 from "../../components/HeadingH4/HeadingH4";
import Logo from "../../components/Logo/Logo";
import Modal from "../../components/Modal/Modal";
import Paragraph400 from "../../components/Paragraph400/Paragraph400";
import Spinner from "../../components/Spinner/Spinner";
import { ActionTypes } from "../../context/Actions";
import { useGeneralContext } from "../../context/GeneralContext";
import { fetchAxios, formatDateAccuracy } from "../../utils/helpers";
import s from "./Booking.module.scss";
type Props = {};
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Booking({}: Props) {
	const [appointmentDate, setAppointmentDateDate] = useState<Value>(new Date());
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const {
		state: { backendApiDevelopmentUrl, self, pickedDate },
		dispatch,
	} = useGeneralContext();

	useEffect(() => {}, []);

	const date = new Date(`${appointmentDate}`);
	const handlerClick = async () => {
		if (date.getDay() === 6 || date.getDay() === 0) {
			return;
		}
		const url = `${backendApiDevelopmentUrl}/appointments/check-availability`;
		setIsLoading(true);
		fetchAxios(url, "POST", { data: date }, self.token)
			.then((r) => {
				if (r.data) {
					dispatch({ type: ActionTypes.CHECK_APPOINTMENTS, payload: { pickedDate: formatDateAccuracy(date, "04", "00"), dataPayload: r.data } });
					setIsLoading(false);
					navigate("/booking/appointments");
				}
			})
			.catch((e) => {
				setIsLoading(false);
			});
	};
	return (
		<Modal>
			{isLoading && <Spinner />}
			<div className={s.booking}>
				<Logo className={s.logoImg} />
				<div className={s.bookingWrapper}>
					<HeaderH4 className={s.bookTitle}>Book a session</HeaderH4>
					<Calendar className={s.calender} minDate={new Date()} maxDate={new Date("2024,12,30")} onChange={setAppointmentDateDate} value={appointmentDate} />
					<span onClick={handlerClick} className={s.btnWrapper}>
						<Button className={s.btnCalender}>Check availability</Button>
					</span>
					<Paragraph400 className={s.note}>At the moment we do not provide sessions at weekends*</Paragraph400>
				</div>
				<Close />
			</div>
		</Modal>
	);
}
