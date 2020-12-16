import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { RecommendActions } from 'app/actions/recommend';
import { RecommendModel } from 'app/models';

const initialState: RootState.RecommendState = [];

export const recommendReducer = handleActions<RootState.RecommendState, RecommendModel>(
  {
    [RecommendActions.Type.LOAD_RECOMMEND]: (state, action) => {
      return [];
    }
  },
  initialState
);
