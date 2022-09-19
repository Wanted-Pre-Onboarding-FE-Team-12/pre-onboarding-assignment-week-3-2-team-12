import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import Thunk from 'redux-thunk';
import Promise from 'redux-promise';
import logger from 'redux-logger';
import rootReducer from '_module';

const configureStore = () => {
	const middleWares = [Thunk, Promise, logger];

	const devTools =
		process.env.NODE_ENV === 'production'
			? compose(applyMiddleware(...middleWares))
			: composeWithDevTools(applyMiddleware(...middleWares));

	const store = createStore(rootReducer, devTools);

	return store;
};

export default configureStore;
