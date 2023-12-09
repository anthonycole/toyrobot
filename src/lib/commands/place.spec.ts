import { Orientation, State } from '../../types';
import { stateProvider } from '../provider.lib';
import { place } from './place';

describe('place', () => {
  it('should increment y when moving north', () => {
    let state: State = { x: 0, y: 0, orientation: Orientation.NORTH, isRobotPlaced: true };
    const globalStateProvider = stateProvider(state);
    place({ ...globalStateProvider, payload: { rawCoordinates: '1,1,NORTH' } });

    expect(globalStateProvider.getState()).toHaveProperty('x', 1);
    expect(globalStateProvider.getState()).toHaveProperty('y', 1);
    expect(globalStateProvider.getState()).toHaveProperty('orientation', Orientation.NORTH);
  });
});
