import { config, language } from '../../config';
import { CommandArgs, PlacePayload } from '../../types';
import { error } from '../notifications.lib';
import { convertToOrientation } from '../utils.lib';

export const place = ({ setState, payload }: CommandArgs<PlacePayload>): void => {
  const coordinates = payload?.rawCoordinates.replace(/\s/g, '').split(',');

  const orientation = coordinates?.length ? convertToOrientation(coordinates[2]) : config.defaultOrientation;

  const xAxis = coordinates ? coordinates[0] : 0;
  const yAxis = coordinates ? coordinates[1] : 0;

  if (coordinates?.length !== 3 || orientation === undefined) {
    error(language.INVALID_COORDINATES);
  } else {
    setState({
      x: Number(xAxis),
      y: Number(yAxis),
      orientation,
      isRobotPlaced: true,
    });
  }
};
