import axios from "axios";
import { useNavigate } from "react-router-dom";
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
	email: yup.string().min(2, "Email is required").required("Email is required"),
	password: yup.string().required("Password is required"),
});

export const contactSchema = yup.object().shape({
	name: yup.string().min(2, "Name must be at list 2 characters long.").required("Name is required"),
	subject: yup.string().min(2, "Subject must be at list 2 characters long.").required("Subject is required"),
	// email: yup.string().min(2, "Email is required").required("Email is required"),
	textarea: yup.string().min(20, "Message must be at list 20 characters long.").required("Message is required"),
});

export const fetchAxios = async (url: string, method = "get", data?: any, token?: string): Promise<any> => {
	return await axios({
		method: method,
		url: url,
		data: data,
		headers: {
			Authorization: `Bearer  ${token}`,
		},
	})
		.then((response) => {
			return {
				data: response.data,
			};
		})
		.catch((error) => {
			return {
				status: error.status,
				data: error.response,
			};
		});
};

export const redirect = (path: string) => {
	const navigate = useNavigate();
	navigate(path);
};

export function calculateAppointmentTime(hour: string, minutes: string) {
	const date = new Date();
	const day = date.getDate().toString();
	const month = (date.getMonth() + 1).toString();
	const year = date.getFullYear().toString();

	// The string format should be: YYYY-MM-DDTHH:mm:ss.sssZ,
	const customDate = new Date(`${year}-${month}-${day} ${hour}:${minutes}`);
	return customDate;
	// return customDate;
}

export function formatDateAccuracy(date: Date, hour: string, minutes: string) {
	const day = date.getDate().toString();
	const month = (date.getMonth() + 1).toString();
	const year = date.getFullYear().toString();
	const customDate = new Date(`${year}-${month}-${day} ${hour}:${minutes}`);
	console.log(customDate);
	return customDate;
}
