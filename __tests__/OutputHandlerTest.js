import { MissionUtils } from "@woowacourse/mission-utils";
import { PrintRoundResult } from "../src/handler/PrintRoundResult.js";
import { DISTANCE_CHAR } from "../src/constants/Constants.js";

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
}

describe('OutputHandler', () => {
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
