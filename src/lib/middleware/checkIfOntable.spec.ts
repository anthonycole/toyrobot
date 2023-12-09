import { Orientation } from '../../types';
import { checkIfOnTable } from './checkIfOnTable';

import * as notificationsLib from '../notifications.lib';

describe('checkIfOnTable', () => {
  it('should show an error and return false if isRobotPlaced is false', () => {
    const errorMock: jest.SpyInstance = jest.spyOn(notificationsLib, 'error');

    const localState = { x: 0, y: 0, orientation: Orientation.NORTH, isRobotPlaced: false };
    const isOnTable = checkIfOnTable(localState);
    expect(errorMock).toHaveBeenCalled();
    expect(isOnTable).toBe(false);
  });

  it('should return true if isRobotPlaced is true', () => {
    const localState = { x: 0, y: 0, orientation: Orientation.NORTH, isRobotPlaced: true };
    const isOnTable = checkIfOnTable(localState);
    expect(isOnTable).toBe(true);
  });
});
