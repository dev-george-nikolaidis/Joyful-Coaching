export interface GeneralContextState {
	test: string;
	isModalOpen: boolean;
	backendApiDevelopmentUrl: string;
	backendApiProductionUrl: string;
	self: Self;
}

export const initialState: GeneralContextState = {
	test: "",
	isModalOpen: false,
	backendApiDevelopmentUrl: "http://localhost:3001/api/v1",
	backendApiProductionUrl: "https://joyful-coaching-api.onrender.com",
	self: null,
};

type Self = {
	id: number;
	email: string;
	token: string;
} | null;
