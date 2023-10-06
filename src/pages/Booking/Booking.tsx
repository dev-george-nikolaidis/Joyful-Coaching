import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import s from "./Booking.module.scss";

type Props = {};
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Booking({}: Props) {
	const [value, onChange] = useState(new Date());

	useEffect(() => {
		// setWorkingDates(getBusinessDates2());
	}, []);

	// workingDates.forEach((d) => {
	// 	console.log(d);
	// });

	return (
		<div className={s.test}>
			{/*@ts-ignore*/}
			<Calendar onChange={onChange} value={value} className={s.c} />
			<input type="date" />
		</div>
	);
}
