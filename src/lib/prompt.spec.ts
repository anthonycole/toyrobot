import { bootstrapPrompt, getPromptData } from './prompt';

jest.mock('readline-sync', () => {
  return {
    question: jest.fn().mockReturnValueOnce('test'),
  };
});

describe('bootstrapPrompt', () => {
  it('should execute a prompt command successfully ', async () => {
    const mockFn = jest.fn().mockResolvedValueOnce(true);
    await bootstrapPrompt({
      test: mockFn,
    });

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe('getPromptData', () => {
  it('should split an argument properly ', () => {
    const promptResponse = getPromptData(['MOVE', '2,3,NORTH']);
    expect(promptResponse).toStrictEqual({ command: 'move', argument: '2,3,NORTH' });
  });

  it('should clean up an argeument ', () => {
    const promptResponse = getPromptData(['MOVE']);
    expect(promptResponse).toStrictEqual({ command: 'move', argument: undefined });
  });
});
