import { move, place, report, left, right } from './lib/commands';
import { Orientation } from './types';
import { State } from './types';

import { stateProvider } from './lib/provider.lib';
import { prompt } from './lib/prompt';
import { checkIfOnTable } from './lib/middleware';

import { runMiddleware } from './lib/middleware.lib';

const state: State = { x: 0, y: 0, orientation: Orientation.NORTH, isRobotPlaced: false };
const globalStateProvider = stateProvider(state);

prompt({
  place: (input: string) => place({ ...globalStateProvider, payload: { rawCoordinates: input } }),
  report: () => report(globalStateProvider),
  move: () =>
    runMiddleware({
      middleware: [checkIfOnTable],
      state: globalStateProvider.getState(),
      command: () => move(globalStateProvider),
    }),
  left: () =>
    runMiddleware({
      middleware: [checkIfOnTable],
      state: globalStateProvider.getState(),
      command: () => left(globalStateProvider),
    }),
  right: () =>
    runMiddleware({
      middleware: [checkIfOnTable],
      state: globalStateProvider.getState(),
      command: () => right(globalStateProvider),
    }),
});
