import { RecommendModel } from 'app/models';

export interface RootState {
  recommend: RootState.RecommendState;
  router?: any;
}

export namespace RootState {
  export type RecommendState = RecommendModel[];
}
