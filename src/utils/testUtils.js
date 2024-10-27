import { MissionUtils } from '@woowacourse/mission-utils';
import App from '../App.js';

export const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

export const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

export const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

export const expectError = async (input, errorMessage) => {
  // given
  mockQuestions(input);

  // when
  const app = new App();

  // then
  await expect(app.run()).rejects.toThrow(errorMessage);
};

export const expectResult = async (inputs, randomValues, logs) => {
  const logSpy = getLogSpy();

  mockQuestions(inputs);
  mockRandoms(randomValues);

  const app = new App();
  await app.run();

  logs.forEach((log) => expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log)));
};
