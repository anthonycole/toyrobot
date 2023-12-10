import { Orientation, State } from '../types';
import { runMiddleware } from './middleware.lib';

describe('runMiddleware', () => {
  it('should run a command passed in if the middleware returns true', () => {
    const middlewareFn = jest.fn();
    const commandFn = jest.fn();

    const state: State = { x: 0, y: 0, orientation: Orientation.NORTH, isRobotPlaced: false };

    runMiddleware({
      command: commandFn,
      middleware: [middlewareFn],
      state,
    });

    expect(middlewareFn).toHaveBeenCalledTimes(1);
    expect(commandFn).toHaveBeenCalledTimes(1);
  });

  it('should not run a command passed in if the middleware returns false', () => {
    const middlewareFn = jest.fn().mockReturnValueOnce(false);
    const commandFn = jest.fn();

    const state: State = { x: 0, y: 0, orientation: Orientation.NORTH, isRobotPlaced: false };

    runMiddleware({
      command: commandFn,
      middleware: [middlewareFn],
      state,
    });

    expect(middlewareFn).toHaveBeenCalledTimes(1);
    expect(commandFn).not.toHaveBeenCalled();
  });

  it('should run the application without any middleware', () => {
    const commandFn = jest.fn();

    const state: State = { x: 0, y: 0, orientation: Orientation.NORTH, isRobotPlaced: false };

    runMiddleware({
      command: commandFn,
      middleware: [],
      state,
    });

    expect(commandFn).toHaveBeenCalled();
  });
});
