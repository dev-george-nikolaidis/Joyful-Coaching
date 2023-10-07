const user = localStorage.getItem("self");
const parsedUser = JSON.parse(user as string);

export interface GeneralContextState {
	test: string;
	isModalOpen: boolean;
	backendApiDevelopmentUrl: string;
	backendApiProductionUrl: string;
	self: Self;
	theme: string;
}

export const initialState: GeneralContextState = {
	test: "",
	isModalOpen: false,
	backendApiDevelopmentUrl: "http://localhost:3001/api/v1",
	backendApiProductionUrl: "https://joyful-coaching-api.onrender.com",
	self: parsedUser,
	theme: localStorage.getItem("theme") || "Dark",
};

type Self = {
	token: string;
};
