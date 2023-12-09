import { Orientation, State } from '../../types';
import { stateProvider } from '../provider.lib';
import { left } from './left';

describe('left', () => {
  it('should move the orientation of the robot left', () => {
    let state: State = { x: 0, y: 0, orientation: Orientation.NORTH, isRobotPlaced: true };
    const globalStateProvider = stateProvider(state);
    left({ ...globalStateProvider });
    expect(globalStateProvider.getState()).toHaveProperty('orientation', Orientation.WEST);
  });
});
