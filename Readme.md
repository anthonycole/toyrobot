# 🤖 Toy Robot

This is a toy robot game written in Typescript as a response to a coding challenge. It allows a robot to be placed on a table at a specified origin and moved unit by unit around in different directions (North, East, South, West), without falling off of that table.

The solution uses the [readline-sync](https://www.npmjs.com/package/readline-sync) package to prompt the user to enter specified command; the state of those commands are kept memory in a state that is persisted until the script is terminated.  A broad overview of the important parts of the application are below:

- The entrypoint for development for this project is in [./src/main.ts](./src/main.ts).
- Commands are located in [./lib/comamnds](./lib/commands). In order to add a new command, a new function should be built that implements the `CommandArgs` interface and added into [./src/main.ts](./src/main.ts).
- Middlware is located in [./lib/middleware](./lib/middleware). Middleware is intended to run before commands are executed. More can be added to [./src/main.ts](./src/main.ts) but must implement the `MiddlewareTypes` interface.
- Notifications are located in [./lib/notifications.ts](./lib/notifications.ts). These are lightweight and use console.log.

## 💾 Commands

These are the commands that can be run on the appplication.

PLACE: Place the robot. Accepts input as per: x,y,d (x plane, y plane, direction). Required to move the robot. Directions can be NORTH, SOUTH, EAST, or WEST
LEFT: Move the robot direction left.
RIGHT: Move the robot direction right
MOVE: Move the robot one unit in the direction it is facing
REPORT: Show the robots current coordinates.

## 👨‍💻 Local Development

In order to develop this project locally, you must:

- Clone this repository or download the source
- Run `npm ci` to install all node packages
- Run `npm run develop` to start nodemon for local development.
- Run `npm run test` to run jest tests
- Note: There is an issue with nodemon and `readline-sync` sometimes not recognising commands, see [here](https://stackoverflow.com/questions/53380499/node-readline-sync-module-enter-key-doesnt-consistently-function). If this happens again.

It is recommendedd to use [nvm](https://github.com/nvm-sh/nvm) to ensure that you're using the version of node in the `.nvmrc`

## 🔧 Configuration

The game can be configured by configuring the `config` object in [./src/config.ts](./src/config.ts). The options that can be configured are as follows:

- `tableCells: { x: 5, y: 5 }` - set the number of cells on the table's x and y plane, default 5.
- `defaultCoordinates`: set the default `x`, `y`, and `orientation` coordinates - defaults to `0`, `0`, `NORTH`
- `promptText`: set the prompt character, defaults to `>`

## 🏗️ Building / Usage

In order to build this project successfully, you must:

- Clone this repository or download the source
- Run `npm ci` to install all node packages
- Run `npm run build` to build the game; the artefacts will build to `./bin/cli.js`. These are overriden on each new build.
- Run `node ./bin/cli.js` to run the game

## 🧪 Test Data

The robot has been successfully manually tested against the following set of instructions

```plain
PLACE 0,0,NORTH
MOVE
REPORT
Output: 0,1,NORTH
```

```plain
PLACE 0,0,NORTH
LEFT
REPORT
Output: 0,0,WEST
```

```plain
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT
Output: 3,3,NORTH
```

## ❓ What I would have done with more time

- Created some integration tests
- Made the game more event-driven
- Extended the notifications library
