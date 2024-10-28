import { MissionUtils } from '@woowacourse/mission-utils';

/**
 * 사용자의 입력을 모의(mock)하는 함수입니다.
 * 주어진 입력 배열에서 값을 하나씩 꺼내 `MissionUtils.Console.readLineAsync` 함수가
 * 호출될 때마다 이를 반환합니다.
 *
 * @function mockQuestions
 * @param {Array<string>} inputs - 시뮬레이션할 사용자 입력 문자열의 배열입니다.
 * @example
 * mockQuestions(['input1', 'input2']);
 * // 다음 호출 시 'input1'이 반환되고 그 다음 호출 시 'input2'가 반환됩니다.
 */
const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn().mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

/**
 * 랜덤 숫자 생성을 모의(mock)하는 함수입니다.
 * 주어진 숫자 배열에서 값을 하나씩 꺼내 `MissionUtils.Random.pickNumberInRange` 함수가
 * 호출될 때마다 이를 반환합니다.
 *
 * @function mockRandoms
 * @param {Array<number>} numbers - 시뮬레이션할 랜덤 숫자의 배열입니다.
 * @example
 * mockRandoms([3, 5, 7]);
 * // 다음 호출 시 3이 반환되고 그 다음 호출 시 5, 이후 7이 반환됩니다.
 */
const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn(() => numbers.shift());
};

/**
 * `MissionUtils.Console.print` 메서드에 대한 스파이(spy)를 설정하고 초기화합니다.
 * 스파이를 사용하여 `print` 호출을 감지하고 검증할 수 있습니다.
 *
 * @function getLogSpy
 * @returns {jest.SpyInstance} MissionUtils.Console.print에 대한 스파이 인스턴스를 반환합니다.
 * @example
 * const logSpy = getLogSpy();
 * logSpy.mockClear();
 */
const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

/**
 * 로그 스파이의 호출 내용을 검증하여 예상되는 로그와 일치하는지 확인합니다.
 * 각 예상 로그 항목이 `logSpy`에 기록되었는지 검증합니다.
 *
 * @function validateLogs
 * @param {jest.SpyInstance} logSpy - `MissionUtils.Console.print`에 대한 스파이 인스턴스입니다.
 * @param {Array<string>} expectedLogs - 예상되는 로그 문자열의 배열입니다.
 * @example
 * validateLogs(logSpy, ['Expected log 1', 'Expected log 2']);
 * // logSpy가 'Expected log 1' 및 'Expected log 2'를 포함하는지 확인합니다.
 */
const validateLogs = (logSpy, expectedLogs) => {
  expectedLogs.forEach((log) => {
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
  });
};

export { mockQuestions, mockRandoms, getLogSpy, validateLogs };
