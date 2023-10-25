import ButtonCancel from "../../../../components/ButtonCancel/ButtonCancel";
import Paragraph500 from "../../../../components/Paragraph500/Paragraph500";
import { useGeneralContext } from "../../../../context/GeneralContext";
import { days, months } from "../../../../data/data";
import { convertAppointmentNumberToStringTime, fetchAxios, formatDateAccuracy } from "../../../../utils/helpers";

import s from "./AccountAppointments.module.scss";

type Props = {
	setRefetch: React.Dispatch<React.SetStateAction<boolean>>;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AccountAppointments({ setRefetch, setIsLoading }: Props) {
	const {
		state: { backendApiUrl, self, accountInfoPayload },
	} = useGeneralContext();
	const todayDate = new Date();
	const todayTimestamp = new Date(todayDate);
	const tomorrowTimestamp = todayTimestamp.setDate(todayDate.getDate() + 1);
	const tomorrowDate = new Date(tomorrowTimestamp);

	function handlerCancel(appointment: number, date: Date) {
		if (tomorrowDate.getDate() > date.getDate()) {
			return;
		}

		const prompt = confirm("Are you sure you want to do cancel your appointment?");
		if (prompt) {
			const url = `${backendApiUrl}/appointments/cancel`;
			setIsLoading(true);
			fetchAxios(url, "DELETE", { appointmentId: appointment, appointmentDate: formatDateAccuracy(date, "04", "00") }, self.token)
				.then((_p) => {
					setRefetch(true);
					setIsLoading(false);
				})
				.catch((_err) => {
					setIsLoading(false);
				});
		}
	}

	const displayAppointments = accountInfoPayload?.appointmentsTable.map((a, i) => {
		const { appointment, date: d } = a;
		const date = new Date(d);
		const stringDate = `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
		return (
			<div className={s.dateContainer} key={i}>
				<div className={s.textWrapper}>
					<Paragraph500 className={s.dateText}>
						<span className={s.dateSpan}>Date: </span>
						{stringDate}
					</Paragraph500>
					<Paragraph500 className={s.timeText}>
						<span className={s.dateSpan}>Time: </span> {convertAppointmentNumberToStringTime(appointment)}
					</Paragraph500>
				</div>
				<span className={s.btnWrapper} onClick={() => handlerCancel(appointment, date)}>
					<ButtonCancel className={tomorrowDate.getDate() > date.getDate() ? `${s.btnDisable}` : ""}>Cancel</ButtonCancel>
				</span>
			</div>
		);
	});

	return (
		<div className={s.infoContainer}>
			<div className={`${s.appointmentsTitle} ${s.infoPlaceholder}`}>My appointments </div>
			{displayAppointments}
		</div>
	);
}
