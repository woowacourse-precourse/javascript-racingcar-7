import {
  prepareCarData,
  prepareMoveCount,
} from '../src/GameUtil/GamePrepare.js';

describe('입력값 유효성 검사', () => {
  test('사용 가능 하지 않는 자동차 이름 존재 시 에러 발생', () => {
    const emptyCarName = ',bobo,jun';
    const carNameWithSpaces = 'bo bo,jun';
    const carNameWithDigits = 'bo04,jun';
    const carNameWithSpecialChar = 'bo@@,jun';
    const carNameExceedsFiveChars = 'boyeon,jun';

    expect(() => prepareCarData(emptyCarName)).toThrow('ERROR');
    expect(() => prepareCarData(carNameWithSpaces)).toThrow('ERROR');
    expect(() => prepareCarData(carNameWithDigits)).toThrow('ERROR');
    expect(() => prepareCarData(carNameWithSpecialChar)).toThrow('ERROR');
    expect(() => prepareCarData(carNameExceedsFiveChars)).toThrow('ERROR');
  });

  test('양의 정수가 아닌 값이 이동 횟수로 입력되면 에러 발생', () => {
    const char = 'a';
    const negativeNumber = -5;
    const decimalNumber = 0.5;

    expect(() => prepareMoveCount(char)).toThrow('ERROR');
    expect(() => prepareMoveCount(negativeNumber)).toThrow('ERROR');
    expect(() => prepareMoveCount(decimalNumber)).toThrow('ERROR');
  });
});
