import { State, Orientation } from '../types';
import { stateProvider } from './provider.lib';

describe('stateProvider', () => {
  it('should return state', () => {
    const state: State = { x: 0, y: 0, orientation: Orientation.NORTH, isRobotPlaced: false };
    const globalStateProvider = stateProvider(state);
    const { getState } = globalStateProvider;
    const returnedState = getState();
    expect(returnedState).toEqual(state);
  });

  it('should update state correctly', () => {
    const state: State = { x: 0, y: 0, orientation: Orientation.NORTH, isRobotPlaced: false };
    const globalStateProvider = stateProvider(state);
    const { getState, setState } = globalStateProvider;
    setState({ y: 3 });
    const returnedState = getState();
    expect(returnedState).toEqual({ ...state, y: 3 });
  });
});
