import { MiddlewareTypes } from '../types';

export const runMiddleware = ({ command, middleware, state }: MiddlewareTypes) => {
  const middlewareResult = middleware.map((middlewareFn: Function) => middlewareFn(state));
  const checkValues = (x: boolean) => x === false;
  if (middleware.length === 0 || !middlewareResult.some(checkValues)) {
    command();
  }
};
