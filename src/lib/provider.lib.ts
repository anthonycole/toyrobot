import { State } from '../types';

export interface StateProviderType {
  getState: () => State;
  setState: (newState: Partial<State>) => void;
}

export const stateProvider = (state: State): StateProviderType => {
  return {
    getState: () => state,
    setState: (updatedState: Partial<State>): void => {
      // eslint-disable-next-line no-param-reassign
      state = { ...state, ...updatedState };
    },
  };
};
