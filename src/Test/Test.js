import { MissionUtils } from '@woowacourse/mission-utils';

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn().mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

// Mocking utility for random number generator
const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn(() => numbers.shift());
};

// Utility for capturing console logs
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

// Utility to validate logs
const validateLogs = (logSpy, expectedLogs) => {
  expectedLogs.forEach((log) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
};

export { mockQuestions, mockRandoms, getLogSpy, validateLogs };
