import * as AT from './constants/actionTypes';

export const selectSaving = ({ index }) => ({
	type: AT.SAVING_SELECTED,
	value: index
})