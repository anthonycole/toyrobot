import { Orientation, ToyRobotConfig } from './types';

export const config: ToyRobotConfig = {
  tableCells: { x: 5, y: 5 },
  promptText: '>',
  defaultOrientation: Orientation.NORTH,
};

export const language = {
  NOT_ON_TABLE: 'The robot is not on a table.',
  END_OF_TABLE: 'You have reached the end of the table. Please turn around.',
  INVALID_COMMAND: 'You have entered an invalid command',
  INVALID_COMMAND_SYNTAX: 'You have entered invalid command syntax. Please look at the README',
  INVALID_COORDINATES: 'Invalid coordinates. Robot could not be placed',
};
