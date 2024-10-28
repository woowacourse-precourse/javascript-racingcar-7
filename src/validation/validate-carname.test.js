import validateCarName, { ERROR_MESSAGES } from './validate-carname.js';

describe('validateCarName', () => {
  test('입력이 비어 있을 경우 에러 발생', () => {
    expect(() => validateCarName()).toThrow(ERROR_MESSAGES.EMPTY_INPUT);
  });

  test('자동차 이름에 빈 값이 포함된 경우 에러 발생', () => {
    const carNameList = ['car1', ''];
    expect(() => validateCarName(carNameList)).toThrow(ERROR_MESSAGES.EMPTY_CAR_NAME);
  });

  test('자동차 이름이 5자를 넘을 경우 에러 발생', () => {
    const carNameList = ['car1', 'excessiveLength'];
    expect(() => validateCarName(carNameList)).toThrow(ERROR_MESSAGES.NAME_LENGTH_EXCEEDED);
  });

  test('자동차 이름이 하나만 입력된 경우 에러 발생', () => {
    const carNameList = ['singleCar'];
    expect(() => validateCarName(carNameList)).toThrow(ERROR_MESSAGES.SINGLE_CAR_NAME);
  });

  test('자동차 이름이 중복될 경우 에러 발생', () => {
    const carNameList = ['car1', 'car1'];
    expect(() => validateCarName(carNameList)).toThrow(ERROR_MESSAGES.DUPLICATE_CAR_NAME);
  });

  test('모든 유효성 검사를 통과하는 경우 에러가 발생하지 않음', () => {
    const carNameList = ['car1', 'car2', 'car3'];
    expect(() => validateCarName(carNameList)).not.toThrow();
  });
});
