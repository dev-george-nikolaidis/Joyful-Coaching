import { useState } from "react";
import { MdNavigateBefore } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Close from "../../components/Close/Close";
import HeaderH3 from "../../components/HeadingH3/HeadingH3";
import HeaderH4 from "../../components/HeadingH4/HeadingH4";
import LoginButton from "../../components/LoginButton/LoginButton";
import Modal from "../../components/Modal/Modal";
import Paragraph400 from "../../components/Paragraph400/Paragraph400";
import PopupModal from "../../components/PopupModal/PopupModal";
import Spinner from "../../components/Spinner/Spinner";
import { ActionTypes } from "../../context/Actions";
import { useGeneralContext } from "../../context/GeneralContext";
import { days, maxAvailableAppointments, months } from "../../data/data";
import { fetchAxios, formatDateAccuracy } from "../../utils/helpers";
import s from "./BookSession.module.scss";

type Props = {};
export default function BookSession({}: Props) {
	const [appointment, setAppointment] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	const {
		state: { appointments, pickedDate, backendApiDevelopmentUrl, self, showPopupWindow },
		dispatch,
	} = useGeneralContext();
	const navigate = useNavigate();
	const date = `${days[pickedDate.getDay()]} ${pickedDate.getDate()} ${months[pickedDate.getMonth()]} ${pickedDate.getFullYear()}`;
	date;

	const handlerBook = () => {
		if (appointment === 0) {
			setErrorMessage("Please select  a session date.");
			return;
		} else {
			setErrorMessage("");
		}

		const url = `${backendApiDevelopmentUrl}/appointments/book`;
		setIsLoading(true);

		fetchAxios(url, "POST", { appointmentId: appointment, appointmentDate: formatDateAccuracy(pickedDate, "04", "00") }, self.token)
			.then((payload) => {
				setIsLoading(false);

				if (payload.data.status == 402) {
					setErrorMessage("Not enough sessions.");
					return;
				}

				if (payload.data === "Success") {
					dispatch({ type: ActionTypes.TOGGLE_POPUP_MODAL });
				}
			})
			.catch((error) => {
				setIsLoading(false);
			});
	};
	const handlerClose = () => {
		navigate("/");
	};
	const handlerBack = () => {
		dispatch({ type: ActionTypes.CHECK_APPOINTMENTS, payload: { pickedDate: null, dataPayload: null } });
		navigate("/booking");
	};

	const handlerBackPopupModal = () => {
		dispatch({ type: ActionTypes.TOGGLE_POPUP_MODAL });
		navigate("/");
	};

	const displayAppointments = maxAvailableAppointments
		.filter((item) => !appointments.includes(item.id))
		.filter((item) => {
			const { id, timeEnd, timeStart, appointmentTime } = item;
			const currentTime = new Date();

			if (appointmentTime.getDate() === pickedDate.getDate()) {
				if (appointmentTime.getHours() < currentTime.getHours() || appointmentTime.getHours() === currentTime.getHours()) {
					return null;
				} else {
					return item;
				}
			} else {
				return item;
			}
		})
		.map((t, i) => {
			const { id, timeEnd, timeStart, appointmentTime } = t;

			return (
				<span key={i} className={s.mapContainer} onClick={() => setAppointment(id)}>
					<button className={appointment === id ? `${s.btn} ${s.active}` : `${s.btn}`}>{`${timeStart}-${timeEnd}`}</button>
				</span>
			);
		});

	return (
		<Modal>
			{isLoading && <Spinner />}
			<section className={s.session}>
				<div className={s.sessionContainer}>
					<div className={s.textHeader}>
						<span className={s.iconTextContainer} onClick={handlerBack}>
							<MdNavigateBefore className={s.iconBack} />
							<Paragraph400 className={s.iconText}>Back</Paragraph400>
						</span>
						<HeaderH4 className={s.title}> {date}</HeaderH4>
					</div>
					<span className={s.errorMessage}>{errorMessage}</span>

					{displayAppointments.length > 0 && <div className={s.btnWrapper}> {displayAppointments}</div>}
					{displayAppointments.length === 0 && <HeaderH4 className={s.noAppointmentsError}>There are no appointments for today, please try another date.</HeaderH4>}

					<span onClick={handlerBook} className={s.btnBookWrapper}>
						<LoginButton disable={displayAppointments.length === 0} className={s.btnBook}>
							Book
						</LoginButton>
					</span>
				</div>
				<span onClick={handlerClose}>
					<Close />
				</span>
			</section>
			{showPopupWindow && (
				<PopupModal popupModal={true}>
					<div className={s.modalContainer}>
						<HeaderH3 className={s.popupTitle}>Your booking was successful! </HeaderH3>
						<span className={s.popupWrapper} onClick={handlerBackPopupModal}>
							<Button className={s.popupBtn}>Back</Button>
						</span>
					</div>
				</PopupModal>
			)}
		</Modal>
	);
}
