import chalk from 'chalk';

const log = console.log;

export const error = (error: string) => log(chalk.red(error));
export const success = (error: string) => log(chalk.green(error));
