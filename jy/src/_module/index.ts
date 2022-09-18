import { combineReducers } from 'redux';
import comment from './comment';

const rootReducer = combineReducers({ comment });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
