const user = localStorage.getItem("self");

const parsedUser = JSON.parse(user as string);

export interface GeneralContextState {
	test: string;
	isModalOpen: boolean;
	backendApiDevelopmentUrl: string;
	backendApiProductionUrl: string;
	self: Self;
	theme: string;
	displayThemeModal: boolean;
	showPopupWindow: boolean;
	processingPayment: boolean;
	sessionPacket: SessionProductT | null;
	pickedDate: Date;
	appointments: number[];
	rerenderAccount: boolean;
	accountInfoPayload: AccountPayload | null;
	currentBlogTitle: string;
	displayHamburgerMenu: boolean;
}

export const initialState: GeneralContextState = {
	test: "",
	isModalOpen: false,
	backendApiDevelopmentUrl: "http://localhost:3001/api/v1",
	backendApiProductionUrl: "https://joyful-coaching-api.onrender.com",
	self: parsedUser,
	theme: localStorage.getItem("theme") || "Dark",
	displayThemeModal: false,
	showPopupWindow: false,
	processingPayment: false,
	sessionPacket: null,
	appointments: [],
	pickedDate: new Date(),
	accountInfoPayload: null,
	rerenderAccount: false,
	currentBlogTitle: "",
	displayHamburgerMenu: true,
};

type Self = {
	token: string;
};

type SessionProductT = {
	level: string;
	price: string;
	service: string;
	cost: number;
	amount: number;
};

export interface AccountPayload {
	userTable: UserTable;
	appointmentsTable: AppointmentsTable[];
}

export interface UserTable {
	id: number;
	email: string;
	password: string;
	role: string;
	appointments: number;
	created_on: string;
	updated_on: string;
}

export interface AppointmentsTable {
	id: number;
	date: string;
	appointment: number;
	user_id: number;
}
