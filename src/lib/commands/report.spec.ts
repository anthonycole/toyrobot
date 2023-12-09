import { Orientation, State } from '../../types';
import * as notificationsExport from '../notifications.lib';
import { stateProvider } from '../provider.lib';
import { report } from './report';

describe('report', () => {
  it('should display the correct value', () => {
    const successMock: jest.SpyInstance = jest.spyOn(notificationsExport, 'success');
    let state: State = { x: 0, y: 0, orientation: Orientation.NORTH, isRobotPlaced: true };
    const globalStateProvider = stateProvider(state);
    report(globalStateProvider);
    expect(successMock).toHaveBeenCalledWith('0,0,NORTH');
  });
});
