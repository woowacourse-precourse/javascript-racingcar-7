import { MissionUtils } from '@woowacourse/mission-utils';
import ConsoleOutput from '../../src/presentation/ConsoleOutput.js';
import PROMPT from '../../src/constants/Prompt.js';

describe('ConsoleOutput 테스트', () => {
  let printSpy;

  beforeEach(() => {
    printSpy = jest.spyOn(MissionUtils.Console, 'print');
  });

  afterEach(() => {
    printSpy.mockClear();
  });

  test('displayRaceHeader가 레이스 헤더를 출력하는지 확인', () => {
    ConsoleOutput.displayRaceHeader();
    expect(printSpy).toHaveBeenCalledWith(PROMPT.RACE_HEADER);
  });

  test('displayCarState가 자동차 상태를 올바르게 출력하는지 확인', () => {
    const testCases = [
      { name: 'car1', moveCount: 3, expected: 'car1 : ---' },
      { name: 'car2', moveCount: 0, expected: 'car2 : ' },
      { name: 'car3', moveCount: 5, expected: 'car3 : -----' },
    ];

    testCases.forEach(({ name, moveCount, expected }) => {
      ConsoleOutput.displayCarState(name, moveCount);
      expect(printSpy).toHaveBeenCalledWith(expected);
      printSpy.mockClear();
    });
  });

  test('displayCarsState가 모든 자동차의 상태를 출력하는지 확인', () => {
    const roundResult = [
      { name: 'car1', moveCount: 2 },
      { name: 'car2', moveCount: 3 },
    ];

    ConsoleOutput.displayCarsState(roundResult);

    expect(printSpy).toHaveBeenCalledWith('car1 : --');
    expect(printSpy).toHaveBeenCalledWith('car2 : ---');
    expect(printSpy).toHaveBeenCalledWith('');
  });

  test('displayWinners가 우승자를 올바르게 출력하는지 확인', () => {
    const winners = ['car1', 'car2'];
    const expectedOutput = '최종 우승자 : car1, car2';

    ConsoleOutput.displayWinners(winners);
    expect(printSpy).toHaveBeenCalledWith(expectedOutput);
  });
});
