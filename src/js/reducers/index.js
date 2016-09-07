import { combineReducers } from 'redux';
import gridstate from './gridstate';
import savings from './savings';

const Reducers = combineReducers({
	gridstate,
	savings
});

export default Reducers;