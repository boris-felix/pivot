import { compose, createStore } from 'redux';
import reducers from './reducers';

const createStoreWithMiddleware = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default createStoreWithMiddleware(reducers);