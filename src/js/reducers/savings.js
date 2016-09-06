import * as AT from '../constants/actionTypes';
const initialState = {
	selected: 0,
	next: 1,
	previous: 0
};

export default (state = initialState, action) => {
	const { type, value } = action;
	const current = parseInt(value, 10);

	if (type == AT.SAVING_SELECTED) {
		return {
			selected: current,
			previous: current - 1 > 0 ? current - 1 : 0,
			next: current + 1
		}
	}

	return state;
}