import { useEffect, useState } from "react";
import Calendar from "react-calendar";

import "react-calendar/dist/Calendar.css";
import Button from "../../components/Button/Button";
import Close from "../../components/Close/Close";
import HeaderH4 from "../../components/HeadingH4/HeadingH4";
import Logo from "../../components/Logo/Logo";
import Modal from "../../components/Modal/Modal";
import Paragraph400 from "../../components/Paragraph400/Paragraph400";
import s from "./Booking.module.scss";
type Props = {};
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Booking({}: Props) {
	console.log("hi");
	const [appointmentDate, setAppointmentDateDate] = useState<Value>(new Date());
	useEffect(() => {}, []);
	console.log(new Date(`${appointmentDate}`).getDay());
	// how to do it: button-> booking/check-date and pass the date to the component

	return (
		<Modal>
			<div className={s.booking}>
				<Logo className={s.logoImg} />
				<div className={s.bookingWrapper}>
					<HeaderH4 className={s.bookTitle}>Book a session</HeaderH4>
					<Calendar className={s.calender} minDate={new Date()} maxDate={new Date("2024,12,30")} onChange={setAppointmentDateDate} value={appointmentDate} />
					<Button className={s.btnCalender}>Check availability</Button>
					<Paragraph400 className={s.note}>At the moment we do not provide sessions at weekends*</Paragraph400>
				</div>
				<Close />
			</div>
		</Modal>
	);
}
