import { question } from 'readline-sync';
import { PromptData, ToyRobotCommandsInterface } from '../types';
import { error } from './notifications.lib';
import { config, language } from '../config';

export const getPromptData = (prompt: any): PromptData => {
  let command = prompt[0].trim().toLowerCase();
  let argument = prompt.length > 1 ? prompt[1] : undefined;

  return {
    command,
    argument,
  };
};

export const bootstrapPrompt = async (commands: ToyRobotCommandsInterface) => {
  let prompt = await question(config.promptText).trim().split(' ');

  const { command, argument } = await getPromptData(prompt);

  if (Object.keys(commands).indexOf(command) > -1) {
    argument ? commands[command](argument) : commands[command]();
  } else {
    error(language.INVALID_COMMAND);
  }
};

export const prompt = async (commands: ToyRobotCommandsInterface) => {
  do {
    bootstrapPrompt(commands);
  } while (true);
};
