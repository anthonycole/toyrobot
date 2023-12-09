import { CommandArgs } from '../../types';
import { success } from '../notifications.lib';

export const report = ({ getState }: CommandArgs): void => {
  const { x, y, orientation } = getState();
  success(`${x},${y},${orientation}`);
};
