import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import Thunk from 'redux-thunk';
import Promise from 'redux-promise';
import logger from 'redux-logger';
import rootReducer from '_module';

const configureStore = () => {
	const store = createStore(
		rootReducer,
		composeWithDevTools(applyMiddleware(Thunk, Promise, logger))
	);

	return store;
};

export default configureStore;
