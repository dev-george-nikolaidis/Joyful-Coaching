import { Action, ActionTypes } from "./Actions";
import { GeneralContextState } from "./State";

type ReducerType = (state: GeneralContextState, action: Action) => GeneralContextState;

export const reducer: ReducerType = (state, action) => {
	switch (action.type) {
		case ActionTypes.GET_SELF:
			const user = localStorage.getItem("self");
			const parsedUser = JSON.parse(user as string);

			return {
				...state,
				self: parsedUser,
			};
		case ActionTypes.LOGOUT:
			localStorage.clear();
			return {
				...state,
				self: null,
			};
		case ActionTypes.OPEN_CLOSE_MODAL:
			return {
				...state,
				isModalOpen: !state.isModalOpen,
			};
		case ActionTypes.TOGGLE_THEME:
			const theme = localStorage.getItem("theme") || "Light";
			return {
				...state,
				theme: theme,
			};

		default:
			return state;
	}
};
