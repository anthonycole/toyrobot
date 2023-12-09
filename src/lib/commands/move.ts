import { CommandArgs, Orientation, TablePlaneDirection } from '../../types';
import { decrementTableUnit, incrementTableUnit } from '../utils.lib';

export const move = ({ getState, setState }: CommandArgs): void => {
  const { orientation, x, y } = getState();

  switch (orientation) {
    case Orientation.NORTH:
      setState({
        y: incrementTableUnit(y, TablePlaneDirection.y),
      });
      return;
    case Orientation.EAST:
      setState({
        x: incrementTableUnit(x, TablePlaneDirection.x),
      });
      return;
    case Orientation.SOUTH:
      setState({
        y: decrementTableUnit(y),
      });
      return;
    case Orientation.WEST:
      setState({
        x: decrementTableUnit(x),
      });
      return;
  }
};
