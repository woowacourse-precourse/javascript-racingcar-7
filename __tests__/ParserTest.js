import { parseCarNames, parseAttempt } from '../src/utils/Parser.js';

describe('자동차 이름 파싱 테스트', () => {
  test('자동차 이름을 쉼표로 구분하여 배열로 반환합니다.', () => {
    const userInputCarNames = 'Seop,Harry,Park';
    const parsedCarNames = parseCarNames(userInputCarNames);
    expect(parsedCarNames).toStrictEqual(['Seop', 'Harry', 'Park']);
  });
  test('자동차 이름을 쉼표로 구분하고 공백이 있어도 제거 후 반환합니다.', () => {
    const userInputCarNames = ' Seop ,  Harry , Park ';
    const parsedCarNames = parseCarNames(userInputCarNames);
    expect(parsedCarNames).toStrictEqual(['Seop', 'Harry', 'Park']);
  });
});

describe('시도할 횟수 파싱 테스트', () => {
  test('숫자가 아닌 입력을 받을 경우 NaN으로 변환됩니다.', () => {
    const userInputAttempt = 'abc';
    expect(parseAttempt(userInputAttempt)).toBeNaN();
  });

  test('시도할 횟수를 숫자로 반환합니다.', () => {
    const userInputAttempt = '3';
    const parsedAttempt = parseAttempt(userInputAttempt);
    expect(parsedAttempt).toBe(3);
  });
  test('시도할 횟수에 공백이 있어도 제거 후 반환합니다.', () => {
    const userInputAttempt = '    5    ';
    const parsedAttempt = parseAttempt(userInputAttempt);
    expect(parsedAttempt).toBe(5);
  });
});
