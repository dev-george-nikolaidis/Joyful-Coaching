export enum ActionTypes {
	GET_SELF = "GET_SELF",
	OPEN_CLOSE_MODAL = "OPEN_CLOSE_MODAL",
	TOGGLE_THEME = "TOGGLE_THEME",
	LOGOUT = "LOGOUT",
	TOGGLE_POPUP_MODAL = "TOGGLE_POPUP_MODAL",
	UPDATE_PASSWORD = "UPDATE_PASSWORD",
	PROCESSING_PAYMENT = "PROCESSING_PAYMENT",
	CHECK_APPOINTMENTS = "CHECK_APPOINTMENTS",
	RERENDER_ACCOUNT = "RERENDER_ACCOUNT",
	FETCH_ACCOUNT_PAYLOAD = "FETCH_ACCOUNT_PAYLOAD",
	UPDATE_CURRENT_BLOG = "UPDATE_CURRENT_BLOG",
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
