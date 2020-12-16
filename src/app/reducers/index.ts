import { combineReducers } from 'redux';
import { RootState } from './state';
import { recommendReducer } from './recommend';

export { RootState };

export const rootReducer = combineReducers<RootState>({
  recommend: recommendReducer
});
