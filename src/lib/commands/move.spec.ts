import { Orientation, State } from '../../types';
import { move } from './move';
import { stateProvider } from '../provider.lib';

describe('move', () => {
  it('should increment y when moving north', () => {
    let state: State = { x: 0, y: 0, orientation: Orientation.NORTH, isRobotPlaced: true };
    const globalStateProvider = stateProvider(state);
    move(globalStateProvider);

    expect(globalStateProvider.getState()).toHaveProperty('y', 1);
  });

  it('should increment x when moving east', () => {
    let state: State = { x: 0, y: 0, orientation: Orientation.EAST, isRobotPlaced: true };
    const globalStateProvider = stateProvider(state);
    move(globalStateProvider);

    expect(globalStateProvider.getState()).toHaveProperty('x', 1);
  });

  it('should decrement y when moving south', () => {
    let state: State = { x: 0, y: 3, orientation: Orientation.SOUTH, isRobotPlaced: true };
    const globalStateProvider = stateProvider(state);
    move(globalStateProvider);

    expect(globalStateProvider.getState()).toHaveProperty('y', 2);
  });

  it('should decrement x when moving west', () => {
    let state: State = { x: 5, y: 0, orientation: Orientation.WEST, isRobotPlaced: true };
    const globalStateProvider = stateProvider(state);
    move(globalStateProvider);

    expect(globalStateProvider.getState()).toHaveProperty('x', 4);
  });
});
