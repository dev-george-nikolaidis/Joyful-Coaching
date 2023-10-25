import axios from "axios";
import { lazy } from "react";
import * as yup from "yup";
export const registerUserSchema = yup.object().shape({
	email: yup.string().email("Please insert a valid email address").required("Email is required"),
	password: yup
		.string()
		.required("Please enter a password")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			"Password must be min 6 characters and contain one uppercase, one lowercase, one number and one special case character."
		),
});

export const updatePasswordSchema = yup.object().shape({
	password: yup
		.string()
		.required("Please enter a password.")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			"Password must be min 6 characters and contain one uppercase, one lowercase, one number and one special case character."
		),
});

export const loginUserSchema = yup.object().shape({
	email: yup.string().email("Please enter a valid email address").min(2, "Email is required").required("Email is required"),
	password: yup.string().required("Password is required"),
});
export const passwordResetSchema = yup.object().shape({
	email: yup.string().email("Please enter a valid email address").min(2, "Email is required").required("Email is required"),
});
export const passwordResetLoginSchema = yup.object().shape({
	password: yup
		.string()
		.required("Please enter a password.")
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
			"Password must be min 6 characters and contain one uppercase, one lowercase, one number and one special case character."
		),
});

export const contactSchema = yup.object().shape({
	name: yup.string().min(2, "Name must be at list 2 characters long.").required("Name is required"),
	subject: yup.string().min(2, "Subject must be at list 2 characters long.").required("Subject is required"),
	email: yup.string().email("Please enter a valid email address").min(2, "Email is required").required("Email is required"),
	textarea: yup.string().min(20, "Message must be at list 20 characters long.").required("Message is required"),
});

export const fetchAxios = async (url: string, method = "get", data?: any, token?: string): Promise<any> => {
	return await axios({
		method: method,
		url: url,
		data: data,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			return {
				data: response.data,
			};
		})
		.catch((errorMessage) => {
			return {
				status: errorMessage.status,
				data: errorMessage.response,
			};
		});
};

// "Access-Control-Allow-Origin": "*",
// "Content-Type": "application/json",

export function calculateAppointmentTime(hour: string, minutes: string) {
	const date = new Date();
	const day = date.getDate().toString();
	const month = (date.getMonth() + 1).toString();
	const year = date.getFullYear().toString();

	// The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ,
	const customDate = new Date(`${year}-${month}-${day} ${hour}:${minutes}`);
	return customDate;
}

export function formatDateAccuracy(date: Date, hour?: string, minutes?: string) {
	const day = date.getDate().toString();
	const month = (date.getMonth() + 1).toString();
	const year = date.getFullYear().toString();
	const customDate = new Date(`${year}-${month}-${day} ${hour}:${minutes}`);
	customDate;
	return customDate;
}

export const convertAppointmentNumberToStringTime = (num: number) => {
	let appointment = "";
	switch (num) {
		case 1:
			appointment = "07:00-08:00";
			break;
		case 2:
			appointment = "08:30-09:30";
			break;
		case 3:
			appointment = "10:00-11:00";
			break;
		case 4:
			appointment = "11:30-12:30";
			break;
		case 5:
			appointment = "13:00-14:00";
			break;

		default:
			appointment = "16:00-17:00";
			break;
	}

	return appointment;
};

export function getRandomNumberBetween(min: number, max: number) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

export function lazyLoad(path: string, nameExport = "") {
	return lazy(() => {
		const promise = import(path);
		if (nameExport === "") {
			return promise;
		} else {
			return promise.then((module) => ({ default: module[nameExport] }));
		}
	});
}
