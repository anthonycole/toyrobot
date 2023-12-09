import { Orientation, State } from '../../types';
import { right } from './right';
import { stateProvider } from '../provider.lib';

describe('right', () => {
  it('should move the orientation of the robot left', () => {
    let state: State = { x: 0, y: 0, orientation: Orientation.NORTH, isRobotPlaced: true };
    const globalStateProvider = stateProvider(state);
    right({ ...globalStateProvider });
    expect(globalStateProvider.getState()).toHaveProperty('orientation', Orientation.EAST);
  });
});
