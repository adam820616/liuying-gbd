import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';

export namespace RecommendActions {
  export enum Type {
    LOAD_RECOMMEND = 'LOAD_RECOMMEND',
  }

  export const loadRecommend = createAction(Type.LOAD_RECOMMEND);
}

export type RecommendActions = Omit<typeof RecommendActions, 'Type'>;

export const useRecommendActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = RecommendActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch]) as RecommendActions;
};
