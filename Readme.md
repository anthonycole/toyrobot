# Toy Robot

This is a toy robot game written in Typescript as a response to a coding challenge.

- It allows a robot to be placed and moved unit by unit around on a table in different directions (North, East, South, West)
- It does not allow the robot to fall off of the table

## 🖥️ Commands

PLACE: Place the robot. Accepts input as per: x,y,l (x plane, y plane, direction). Required to move the robot.
LEFT: Move the robot direction left.
RIGHT: Move the robot direction right
MOVE: Move the robot one unit in the direction it is facing
REPORT: Show the robots current coordinates.

## 🖥️ Local Development

In order to develop this project locally, you must:

- Clone this repository or download the source
- Run `npm ci` to install all node packages
- Run `npm run develop` to start nodemon for local development.
- Note: There is an issue with nodemon and `readline-sync` sometimes not recognising commands, see [here](https://stackoverflow.com/questions/53380499/node-readline-sync-module-enter-key-doesnt-consistently-function). If this happens again.

We recommend using [nvm](https://github.com/nvm-sh/nvm) and ensuring that you're using the version of node in the `.nvmrc`

## 🔧 Configuration

The entrypoint for this project is in [./src/main.ts](./src/main.ts).

The game can be configured by configuring the `config` object in [./src/config.ts](./src/config.ts). The options that can be configured are as follows:

- `tableCells: { x: 5, y: 5 }` - set the number of cells on the table's x and y plane, default 5.
- `defaultCoordinates`: set the default `x`, `y`, and `orientation` coordinates - default `0`, `0`, `NORTH`
- `promptText`: set the prompt character, default `>`

## 🏗️ Building

In order to build this project successfully, you must:

- Clone this repository or download the source
- Run `npm ci` to install all node packages
- Run `npm run build` to build the game; the artefacts will build to `./bin/cli.js`. These are overriden on each new build.
- Run `node ./bin/cli.js` to run the game

## 🧪 Test Data

The robot has been successfully manually tested against the following directions

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
