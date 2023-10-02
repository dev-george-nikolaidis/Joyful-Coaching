export enum ActionTypes {
	TEST = "TEST",
	OPEN_CLOSE_MODAL = "OPEN_CLOSE_MODAL",
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
