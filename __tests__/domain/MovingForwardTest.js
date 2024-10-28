import { MissionUtils } from '@woowacourse/mission-utils';
import MovingForward from '../../src/domain/MovingForward';

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange,
  );
};

describe('자동차 전진 기능 테스트', () => {
  const MOVING_FORWARD = 4;
  const STOP = 3;

  test('랜덤 숫자가 4 이상이 나오면 1이 더해진다.', () => {
    // given
    const CARS = new Map([['람보르기니', 0]]);
    const NUMBER = 1;
    const OUTPUT = new Map([['람보르기니', 1]]);

    mockRandoms([MOVING_FORWARD]);

    // when
    const output = new MovingForward(CARS, NUMBER).getMoveResults();

    // then
    expect(output.cars).toEqual(OUTPUT);
  });

  test('랜덤 숫자가 4 미만이 나오면 1이 더해지지 않는다.', () => {
    // given
    const CARS = new Map([['포르쉐', 0]]);
    const NUMBER = 1;
    const OUTPUT = new Map([['포르쉐', 0]]);

    mockRandoms([STOP]);

    // when
    const output = new MovingForward(CARS, NUMBER).getMoveResults();

    // then
    expect(output.cars).toEqual(OUTPUT);
  });

  test('입력된 자동차가 입력된 횟수만큼 경주를 할 때, 각 경주의 자동차마다 4 이상의 랜덤 숫자가 나오면 해당 자동차에 1씩 더해지고 그렇지 않으면 아무 것도 더해지지 않는다.', () => {
    // given
    const CARS = new Map([
      ['소나타', 0],
      ['그렌져', 0],
      ['캠리', 0],
    ]);
    const NUMBER = 3;
    const OUTPUT = new Map([
      ['소나타', 1],
      ['그렌져', 1],
      ['캠리', 2],
    ]);

    mockRandoms([
      MOVING_FORWARD,
      STOP,
      STOP,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      STOP,
      MOVING_FORWARD,
    ]);

    // when
    const output = new MovingForward(CARS, NUMBER).getMoveResults();

    // then
    expect(output.cars).toEqual(OUTPUT);
  });

  test('시도할 횟수가 0이면 빈 문자열이 반환된다.', () => {
    // given
    const CARS = new Map([
      ['소나타', 0],
      ['그렌져', 0],
      ['캠리', 0],
    ]);
    const NUMBER = 0;
    const OUTPUT = '';

    // when
    const output = new MovingForward(CARS, NUMBER).getMoveResults();

    // then
    expect(output.progress).toEqual(OUTPUT);
  });

  test('시도할 횟수가 1 이상이면 횟수마다 전진 과정이 기록된다.', () => {
    // given
    const CARS = new Map([
      ['소나타', 0],
      ['그렌져', 0],
      ['캠리', 0],
    ]);
    const NUMBER = 3;
    const OUTPUT =
      '\n소나타 : -\n그렌져 : \n캠리 : \n\n소나타 : -\n그렌져 : -\n캠리 : -\n\n소나타 : -\n그렌져 : -\n캠리 : --';

    mockRandoms([
      MOVING_FORWARD,
      STOP,
      STOP,
      STOP,
      MOVING_FORWARD,
      MOVING_FORWARD,
      STOP,
      STOP,
      MOVING_FORWARD,
    ]);

    // when
    const output = new MovingForward(CARS, NUMBER).getMoveResults();

    // then
    expect(output.progress).toEqual(OUTPUT);
  });
});
