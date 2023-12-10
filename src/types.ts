export interface ToyRobotCommandsInterface {
  [id: string]: (...args: string[]) => void;
}

export enum Orientation {
  NORTH = 'NORTH',
  EAST = 'EAST',
  SOUTH = 'SOUTH',
  WEST = 'WEST',
}
export interface State {
  x: number;
  y: number;
  orientation: Orientation;
  isRobotPlaced: boolean;
}

export interface ToyRobotConfig {
  promptText: string;
  tableCells: { x: number; y: number };
  defaultCoordinates: {
    x: number;
    y: number;
    orientation: Orientation;
  };
}

export enum TablePlaneDirection {
  x = 'x',
  y = 'y',
}

export enum OrientationMovement {
  Left,
  Right,
}

export interface CommandArgs<T = {}> {
  getState: () => State;
  setState: (newState: Partial<State>) => void;
  middleware?: [];
  payload?: T;
}

export interface PlacePayload {
  rawCoordinates: string;
}

export interface RotationPayload {
  direction: OrientationMovement;
}

export interface promptOptionsType {
  state?: State;
  middleware?: Function[];
}

export interface PromptData {
  command: string;
  argument: string | undefined;
}

export interface MiddlewareTypes {
  command: () => void;
  middleware: Function[];
  state: State;
}
