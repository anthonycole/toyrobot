import { config, language } from '../config';
import { State, Orientation, OrientationMovement, TablePlaneDirection } from '../types';
import { error } from './notifications.lib';

export const incrementTableUnit = (stateValue: number, direction: TablePlaneDirection): number => {
  let tableCell = stateValue;

  const numberOfTableCells = direction === TablePlaneDirection.x ? config.tableCells.x : config.tableCells.y;

  if (stateValue >= numberOfTableCells) {
    error(language.END_OF_TABLE);
    return tableCell;
  }
  return ++tableCell;
};

export const decrementTableUnit = (stateValue: number): number => {
  let tableCell = stateValue;
  if (stateValue === 0) {
    error(language.END_OF_TABLE);
    return tableCell;
  }
  return --tableCell;
};

export const moveRobot = (state: State): State => {
  switch (state.orientation) {
    case Orientation.NORTH:
      return { ...state, x: incrementTableUnit(state.x, TablePlaneDirection.x) };
    case Orientation.EAST:
      return { ...state, y: incrementTableUnit(state.y, TablePlaneDirection.y) };
    case Orientation.SOUTH:
      return { ...state, x: decrementTableUnit(state.x) };
    case Orientation.WEST:
      return { ...state, y: decrementTableUnit(state.y) };
    default:
      return state;
  }
};

export const iterateOrientation = (movement: OrientationMovement | undefined, orientation: Orientation) => {
  if (movement === OrientationMovement.Left) {
    return OrientationCompassLeft(orientation);
  } else {
    return OrientationCompassRight(orientation);
  }
};

export const OrientationCompassRight = (orientation: Orientation): Orientation => {
  switch (orientation) {
    case Orientation.NORTH:
      return Orientation.EAST;
    case Orientation.EAST:
      return Orientation.SOUTH;
    case Orientation.SOUTH:
      return Orientation.WEST;
    case Orientation.WEST:
      return Orientation.NORTH;
  }
};

export const OrientationCompassLeft = (orientation: Orientation): Orientation => {
  switch (orientation) {
    case Orientation.NORTH:
      return Orientation.WEST;
    case Orientation.EAST:
      return Orientation.NORTH;
    case Orientation.SOUTH:
      return Orientation.EAST;
    case Orientation.WEST:
      return Orientation.NORTH;
  }
};

export const convertToOrientation = (direction: string): Orientation | undefined => {
  return Orientation[direction as keyof typeof Orientation];
};
