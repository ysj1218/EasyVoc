import { CHANGE_INDEX, GET_FIRENTLINK } from './actionTypes';

const defaultState = {
	list: [],
	firend_linklist: []
}

export default (state = defaultState, action) => {

	if (action.type === CHANGE_INDEX) {
		const newState = Object.assign({}, state);
		newState.list = action.value;
		return newState;
	}

	if (action.type === GET_FIRENTLINK) {
		const newState = Object.assign({}, state);
		newState.firend_linklist = action.value;
		return newState;
	}

	return state;
}
