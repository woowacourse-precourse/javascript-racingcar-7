import { Console } from '@woowacourse/mission-utils';
import { OutputView } from '../src/view/OutputView.js';
import { OUTPUT } from '../src/constant';

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('OutputView 테스트', () => {
  let outputView;
  let logSpy;

  beforeEach(() => {
    outputView = new OutputView();
    logSpy = getLogSpy();
  });

  test('자동차 이동 결과 출력', () => {
    const cars = [
      { name: 'pobi', advancedCount: 0 },
      { name: 'woni', advancedCount: 3 },
      { name: 'yeongi', advancedCount: 5 },
    ];
    const output = ['pobi : ', 'woni : ---', 'yeongi : -----'];

    outputView.advancedResult(cars);

    output.forEach((log) =>
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log)),
    );
  });

  test('빈 문자열 출력', () => {
    outputView.emptyLine();

    expect(logSpy).toHaveBeenCalledWith('');
  });

  test('인수로 전달 받은 문자열 출력', () => {
    const string = OUTPUT.EXCUTION_RESULT;

    outputView.string(string);

    expect(logSpy).toHaveBeenCalledWith(OUTPUT.EXCUTION_RESULT);
  });

  test('우승자 출력', () => {
    const winners = ['pobi', 'yeongi'];

    outputView.winners(winners);

    expect(logSpy).toHaveBeenCalledWith('최종 우승자 : pobi, yeongi');
  });
});
