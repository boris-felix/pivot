import * as AT from '../constants/actionTypes';
const initialState = [];

export default (state = initialState, action) => {
	const { type, values } = action;

	if (type == AT.UPDATE_DATAS && values instanceof Array) {
		return values;
	}

	return state;
}