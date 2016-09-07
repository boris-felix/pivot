import React from 'react';
import { expect } from 'chai';
import GridStateReducer from '../gridstate';
import SavingsReducer from '../savings';
import {
	SAVING_SELECTED,
	UPDATE_DATAS
} from '../../constants/actionTypes';

describe('Gridstate reducer', () => {
	it('should return the first element of the as current by default', () => {
		expect(GridStateReducer(undefined, {
			type: SAVING_SELECTED,
			value: undefined 
		})).to.eql({
			selected: 0,
			next: 1,
			previous: 0
		});
	});

	it('should increase the next and the previous value if current is rising', () => {
		expect(GridStateReducer(undefined, {
			type: SAVING_SELECTED,
			value: 2
		})).to.eql({
			selected: 2,
			next: 3,
			previous: 1
		});
	});

	it('should decrease the next and the previous value if current is decreasing', () => {
		expect(GridStateReducer(undefined, {
			type: SAVING_SELECTED,
			value: 1
		})).to.eql({
			selected: 1,
			next: 2,
			previous: 0
		});
	});
});

describe('Savings reducers', () => {
	it('should return an array of values', () => {
		expect(SavingsReducer(undefined, {
			type: UPDATE_DATAS,
			values: undefined 
		})).to.eql([]);

		expect(SavingsReducer(undefined, {
			type: UPDATE_DATAS,
			values: [
				{
					foo: 'bar'
				}
			]
		})).to.eql([
			{
				foo: 'bar'
			}
		]);
	});
});