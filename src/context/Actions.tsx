export enum ActionTypes {
	GET_SELF = "GET_SELF",
	OPEN_CLOSE_MODAL = "OPEN_CLOSE_MODAL",
	TOGGLE_THEME = "TOGGLE_THEME",
	LOGOUT = "LOGOUT",
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
