import { isWeekend } from "date-fns";
import * as yup from "yup";

export const registerUserSchema = yup.object().shape({
	// username: yup.string().min(2, "Username must be at least 2 characters").required("Username is required"),
	email: yup.string().email("Please insert a valid email address").required("Email is required"),
	password: yup
		.string()
		.required("Please enter a password")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			"Password must be min 6 characters and contain one uppercase, one lowercase, one number and one special case character."
		),
	// .oneOf([yup.ref("password_repeat"), ""], "Passwords must match"),
	// password_repeat: yup
	// 	.string()
	// 	.required("Please enter password repeat ")
	// 	.matches(
	// 		/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
	// 		"Password repeat  must be min 6   characters and contain one uppercase, one lowercase, one Number and one Special case character"
	// 	)
	// 	.oneOf([yup.ref("password"), ""], "Passwords must match"),
	// question: yup.string().required("Question is required"),
});

export const loginUserSchema = yup.object().shape({
	email: yup.string().min(2, "Email is required").required("Email is required"),
	password: yup.string().required("Password is required"),
});

export const contactSchema = yup.object().shape({
	name: yup.string().min(2, "Name must be at list 2 characters long.").required("Name is required"),
	subject: yup.string().min(2, "Subject must be at list 2 characters long.").required("Subject is required"),
	// email: yup.string().min(2, "Email is required").required("Email is required"),
	textarea: yup.string().min(20, "Message must be at list 20 characters long.").required("Message is required"),
});

export function getBusinessDates() {
	const startDate = new Date();
	const endDate = new Date("2024-12-30");
	const workingDates = [];
	const curDate = new Date(startDate.getTime());

	while (curDate <= endDate) {
		const dayOfWeek = curDate.getDay();
		if (dayOfWeek !== 0 && dayOfWeek !== 6) {
			workingDates.push(new Date(`${curDate.getFullYear().toString()},${curDate.getMonth().toString()},${curDate.getDate().toString()}`));
			// console.log(new Date(`${curDate.getFullYear()}-${curDate.getMonth()}-${curDate.getDate()}`));
			// console.log(curDate.getFullYear());
			// const test = new Date(`${curDate.getFullYear().toString()},12.1`);

			console.log(new Date(`${curDate.getFullYear().toString()}, ${curDate.getMonth().toString()}, ${curDate.getDate().toString()}`));
		}
		curDate.setDate(curDate.getDate() + 1);
	}
	return workingDates;
}
export function getBusinessDates2() {
	const startDate = new Date();
	const endDate = new Date("2024-12-30");
	const workingDates = [];
	if (startDate > endDate) return false;

	while (startDate < endDate) {
		if (isWeekend(startDate)) workingDates.push(new Date(startDate));
		startDate.setDate(startDate.getDate() + 1);
	}

	return workingDates;
}
