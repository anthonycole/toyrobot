import { CommandArgs, OrientationMovement } from '../../types';
import { iterateOrientation } from '../utils.lib';

export const left = ({ setState, getState }: CommandArgs): void => {
  const { orientation } = getState();
  setState({ orientation: iterateOrientation(OrientationMovement.Left, orientation) });
};
