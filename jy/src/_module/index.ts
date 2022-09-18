import { combineReducers } from 'redux';
import comment from './comment';

const rootReducer = combineReducers({ comment });

/**
 * rootReducer의 반환값을 유추해주기 위해, 이 타입을 컨테이너 컴포넌트에서 불러와서 사용해야 하므로 내보내준다.
 * 컴포넌트에서 사용하게 될 스토어에 저장 된 데이터의 타입
 */
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
