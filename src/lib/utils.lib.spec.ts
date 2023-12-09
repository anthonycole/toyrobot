import * as notificationsLib from './notifications.lib';

import { Orientation, State, TablePlaneDirection } from '../types';
import {
  OrientationCompassLeft,
  OrientationCompassRight,
  convertToOrientation,
  decrementTableUnit,
  incrementTableUnit,
  moveRobot,
} from './utils.lib';

jest.mock('../config', () => {
  return {
    config: {
      tableCells: { x: 6, y: 5 },
      defaultOrientation: Orientation.NORTH,
    },
    language: {
      END_OF_TABLE: 'End of table.',
      INVALID_COMMAND: 'Wrong Command',
      INVALID_COMMAND_SYNTAX: 'Invalid Syntax',
    },
  };
});

describe('incrementState', () => {
  const errorMock: jest.SpyInstance = jest.spyOn(notificationsLib, 'error');

  it('should increment the state', () => {
    const state = incrementTableUnit(1, TablePlaneDirection.x);
    expect(state).toBe(2);
  });

  it('should error if the state increases past the allowed number of table cells', () => {
    incrementTableUnit(6, TablePlaneDirection.x);
    expect(errorMock).toHaveBeenCalled();
  });
});

describe('decrementState', () => {
  const errorMock: jest.SpyInstance = jest.spyOn(notificationsLib, 'error');

  it('should decrement the state', () => {
    const state = decrementTableUnit(1);
    expect(state).toBe(0);
  });

  it('should error if the state decreases past 0', () => {
    decrementTableUnit(0);
    expect(errorMock).toHaveBeenCalled();
  });
});

describe('moveRobot', () => {
  it('should increment the x state if moving north', () => {
    const localState: State = { x: 0, y: 0, orientation: Orientation.NORTH, isRobotPlaced: true };
    const moveRobotNorth = moveRobot(localState);
    expect(moveRobotNorth).toHaveProperty('x', 1);
  });

  it('should increment the y state if moving east', () => {
    const localState: State = { x: 0, y: 3, orientation: Orientation.EAST, isRobotPlaced: true };
    const moveRobotNorth = moveRobot(localState);
    expect(moveRobotNorth).toHaveProperty('y', 4);
  });

  it('should decrement the state if moving south', () => {
    const localState: State = { x: 3, y: 0, orientation: Orientation.SOUTH, isRobotPlaced: true };
    const moveRobotNorth = moveRobot(localState);
    expect(moveRobotNorth).toHaveProperty('x', 2);
  });

  it('should decrement the y state if moving west', () => {
    const localState: State = { x: 0, y: 7, orientation: Orientation.WEST, isRobotPlaced: true };
    const moveRobotNorth = moveRobot(localState);
    expect(moveRobotNorth).toHaveProperty('y', 6);
  });
});

describe('OrientationCompassLeft', () => {
  it('should rotate the user direction orientation to the left correctly', () => {
    const moveCompassLeft = OrientationCompassLeft(Orientation.NORTH);
    expect(moveCompassLeft).toBe(Orientation.WEST);
  });
});

describe('OrientationCompassRight', () => {
  it('should rotate the user direction orientation to the right correctly', () => {
    const moveCompassRight = OrientationCompassRight(Orientation.NORTH);
    expect(moveCompassRight).toBe(Orientation.EAST);
  });
});

describe('convertToOrientation', () => {
  it('should convert the orientation correctly', () => {
    const convertOrientation = convertToOrientation('WEST');
    expect(convertOrientation).toBe(Orientation.WEST);
  });

  it('should return an undefined value for an invalid orientation', () => {
    const convertOrientation = convertToOrientation('NOWHERE');
    expect(convertOrientation).toBe(undefined);
  });
});
