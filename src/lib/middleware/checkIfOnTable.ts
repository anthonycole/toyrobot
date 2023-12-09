import { language } from '../../config';
import { State } from '../../types';
import { error } from '../notifications.lib';

export interface MiddlewareTypes {
  command: () => void;
  middleware: Function[];
  state: State;
}

export const runMiddleware = ({ command, middleware, state }: MiddlewareTypes) => {
  const middlewareResult = middleware.map((middlewareFn: Function) => middlewareFn(state));
  const checkValues = (x: boolean) => x === false;
  if (!middlewareResult.some(checkValues)) {
    command();
  }
};

export const checkIfOnTable = (state: State): boolean => {
  const { isRobotPlaced } = state;

  if (isRobotPlaced === false) {
    error(language.NOT_ON_TABLE);
    return false;
  } else {
    return true;
  }
};
