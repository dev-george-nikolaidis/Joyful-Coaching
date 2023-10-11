export enum ActionTypes {
	GET_SELF = "GET_SELF",
	OPEN_CLOSE_MODAL = "OPEN_CLOSE_MODAL",
	TOGGLE_THEME = "TOGGLE_THEME",
	LOGOUT = "LOGOUT",
	TOGGLE_POPUP_MODAL = "TOGGLE_POPUP_MODAL",
	UPDATE_PASSWORD = "UPDATE_PASSWORD",
	PROCESSING_PAYMENT = "PROCESSING_PAYMENT",
}

export enum PayloadTypes {}

export interface Action {
	type: ActionTypes;
	payload?: any;
}

export interface Genres {
	genres: Genre[];
}

export interface Genre {
	id: number;
	name: string;
}
