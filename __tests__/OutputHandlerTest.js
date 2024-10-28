import { MissionUtils } from "@woowacourse/mission-utils";
import { PrintRoundResult } from "../src/handler/PrintRoundResult.js";
import { PrintWinners } from "../src/handler/PrintWinners.js";
import { DISTANCE_CHAR } from "../src/constants/Constants.js";
import { PRINT_WINNER_MESSAGE } from "../src/constants/Messages.js";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
}

describe('PrintRoundResult Class 테스트', () => {
  test('라운드 별 실행 결과를 출력한다.', () => {
    const logSpy = getLogSpy();
    const roundResult = [
      { name: 'a', length: 2 },
      { name: 'b', length: 3 },
      { name: 'c', length: 2 }
    ]
    const expectedOutput = roundResult.map(({ name, length }) => `${name} : ${DISTANCE_CHAR.repeat(length)}`)

    new PrintRoundResult().print(roundResult)

    const actualOutputs = logSpy.mock.calls.map(call => call[0]);
    expectedOutput.forEach((output) => expect(actualOutputs).toContain(output));
  })
})

describe('PrintWinners Class 테스트', () => {
  test('우승자를 쉼표(,)로 구분하여 출력한다.', () => {
    const winnersArr = ['Jelly', 'Yummy'];
    const logSpy = getLogSpy();

    const expectedOutput = PRINT_WINNER_MESSAGE + winnersArr.join(', ');

    new PrintWinners().print(winnersArr);

    const actualOutput = logSpy.mock.calls[0][0];
    expect(actualOutput).toBe(expectedOutput);
  })

  const winners = ['a,b', 'd;dd,s', 'c c c,k'];
  test.each(winners)('우승자가 여러명인 경우 쉼표(,)로 구분하여 출력한다.', (winner) => {
    const winnerArr = winner.split(',');
    const logSpy = getLogSpy();

    const expectedOutput = `최종 우승자 : ${winnerArr.join(', ')}`;

    new PrintWinners().print(winnerArr);

    const actualOutput = logSpy.mock.calls[0][0];
    expect(actualOutput).toBe(expectedOutput);
  });
})
