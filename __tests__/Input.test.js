
import { getCarNames, getMoveAttempts } from '../src/utils/getInput';
import { CONSTANTS } from '../src/constant/Constant';
import { Console } from '@woowacourse/mission-utils';


jest.mock('@woowacourse/mission-utils', () => ({
  Console: {
    readLineAsync: jest.fn(),
  },
}));

describe('자동차 이름 입력 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('이름이 5자 이하인 경우 배열로 반환.', async () => {
    Console.readLineAsync.mockResolvedValueOnce('pobi,crong,honux');
    const carNames = await getCarNames();
    expect(carNames).toEqual(['pobi', 'crong', 'honux']);
  });

  test('쉼표로 구분된 이름이 배열로 반환됩니다.', async () => {
    const validInput = 'car1, car2, car3';
    const carNames = await getCarNames(validInput);
    expect(carNames).toEqual(['car1', 'car2', 'car3']);
  });

  test('5자를 초과하는 이름이 포함된 경우 에러가 발생.', async () => {
    Console.readLineAsync.mockResolvedValueOnce('pobi,crong1234,hoeux');
    await expect(getCarNames()).rejects.toThrow(CONSTANTS.ERROR_MSG1);
  });

  test('빈 입력이나 공백 입력 시 에러가 발생해야 합니다.', async () => {
    const emptyInput = '';
    await expect(getCarNames(emptyInput)).rejects.toThrow(CONSTANTS.ERROR_MSG1);
  });
});

describe('시도 횟수 입력 테스트', () => {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  test('양의 정수 입력 시 정상적으로 반환.', async () => {
    Console.readLineAsync.mockResolvedValueOnce('5');
    const attempts = await getMoveAttempts();
    expect(attempts).toBe(5);
  });

  test('0 이하의 값 입력 시 에러가 발생.', async () => {
    Console.readLineAsync.mockResolvedValueOnce('0');
    await expect(getMoveAttempts()).rejects.toThrow(CONSTANTS.ERROR_MSG2);
  });
});
