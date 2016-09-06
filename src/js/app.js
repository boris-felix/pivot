import ReactDOM from 'react-dom';
import Root from './containers/Root';
import Store from './store';

class App {
	constructor (domContainerId) {
		const domContainer = document.getElementById(domContainerId);
		// Connect React dom render to redux store
		setTimeout(() => Root(domContainer, Store), 300);
	};
};

window.App = new App('root');

export default App;