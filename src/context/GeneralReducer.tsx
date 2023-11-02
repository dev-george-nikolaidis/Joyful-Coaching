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
		case ActionTypes.UPDATE_PASSWORD:
			const updatedUser = localStorage.getItem("self");
			const updatedParsedUser = JSON.parse(updatedUser as string);
			return {
				...state,
				self: {
					token: updatedParsedUser,
				},
			};
		case ActionTypes.LOGOUT:
			localStorage.removeItem("self");
			return {
				...state,
				self: null,
			};
		case ActionTypes.OPEN_CLOSE_MODAL:
			return {
				...state,
				isModalOpen: !state.isModalOpen,
			};
		case ActionTypes.UPDATE_CURRENT_BLOG:
			return {
				...state,
				currentBlogTitle: action.payload,
			};

		case ActionTypes.CHECK_APPOINTMENTS:
			return {
				...state,
				pickedDate: action.payload.pickedDate,
				appointments: action.payload.dataPayload,
			};
		case ActionTypes.FETCH_ACCOUNT_PAYLOAD:
			return {
				...state,
				accountInfoPayload: action.payload,
			};
		case ActionTypes.RERENDER_ACCOUNT:
			return {
				...state,
				accountInfoPayload: action.payload,
			};

		case ActionTypes.PROCESSING_PAYMENT:
			return {
				...state,
				sessionPacket: action.payload,
			};
		case ActionTypes.TOGGLE_POPUP_MODAL:
			return {
				...state,
				showPopupWindow: !state.showPopupWindow,
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
