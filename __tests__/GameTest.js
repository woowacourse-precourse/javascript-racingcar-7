import { DISTANCE, MIN_ATTEMPT_COUNT, WINNING_NUMBER } from "../src/constants/Constants.js";
import { Car } from "../src/Car.js";
import { Game } from "../src/Game.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ATTEMPT_COUNT_ERROR_MESSAGE } from "../src/constants/Messages.js";

const mockRandomNumbers = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn().mockImplementation(() => numbers.shift());
};

describe('Game Test', () => {
  test('랜덤 값이 우승 번호 이상이면 Car를 전진한다.', () => {
    const attemptCount = 1;
    const cars = [new Car('Jelly'), new Car('Yummy')];

    mockRandomNumbers([WINNING_NUMBER, WINNING_NUMBER - 1]);

    new Game().play(attemptCount, cars);

    const winner = cars[0];
    const loser = cars[1];

    expect(winner.getLength()).toBe(DISTANCE);
    expect(loser.getLength()).toBe(0);
  })

  test('최소 시도 횟수 미만인 값을 입력하면 에러를 던진다.', () => {
    const underMinAttemptCount = `${MIN_ATTEMPT_COUNT - 1}`;
    const cars = [new Car('Jelly'), new Car('Yummy')];

    expect(() => new Game().play(underMinAttemptCount, cars)).toThrow(ATTEMPT_COUNT_ERROR_MESSAGE);
  })
})
