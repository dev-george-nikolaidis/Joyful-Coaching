import { Action, ActionTypes } from "./Actions";
import { GeneralContextState } from "./State";

type ReducerType = (state: GeneralContextState, action: Action) => GeneralContextState;

export const reducer: ReducerType = (state, action) => {
	switch (action.type) {
		case ActionTypes.TEST:
			return {
				...state,
				test: action.payload,
			};
		case ActionTypes.OPEN_CLOSE_MODAL:
			return {
				...state,
				isModalOpen: !state.isModalOpen,
			};

		default:
			return state;
	}
};
