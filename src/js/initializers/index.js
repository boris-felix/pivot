import { updateDatas } from '../actionsCreator';

const Data = [
	{
		name: 'Fixed saver',
		interest_rate: '1.2',
		minimum_deposit: 2000,
		interest_type: 'Fixed'
	},
	{
		name: 'Flexed saver',
		interest_rate: '1.2',
		minimum_deposit: 200,
		interest_type: 'Tracker'
	},
	{
		name: 'Fixed saver',
		interest_rate: '1.2',
		minimum_deposit: 550,
		interest_type: 'Fixed'
	},
	{
		name: 'Fixed saver',
		interest_rate: '1.2',
		minimum_deposit: 800,
		interest_type: 'Fixed'
	}
];

/**
 * Temporary initializer where we will fetch the datas from the future api.
 * For the time being we use some mocked datas but it will be really straight
 * forward to switch to a proper AJAX call as the dispatcher will always provide
 * the final datas to the UI at the end.
 */

export default (store) => {
	store.dispatch(updateDatas(Data));
}