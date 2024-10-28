import { Random } from '@woowacourse/mission-utils';
import { extractRandomNumber, isMoveCar, raceStart } from './Move.js';
import { jest, test, expect, describe } from "@jest/globals";

Random.pickNumberInRange = jest.fn();

test('0부터 9 사이의 숫자를 반환해야 한다', () => {
    Random.pickNumberInRange.mockReturnValue(5);

    expect(extractRandomNumber()).toBe(5);

    expect(Random.pickNumberInRange).toHaveBeenCalledWith(0, 9);
});

describe("자동차 전진기준 임계값 수치 4를 이용해서 전진을 시험한다.", () => {
    test("랜덤값이 4일 때 자동차가 이동해야 한다", () => {
        const car = { move: jest.fn() };
        Random.pickNumberInRange.mockReturnValue(4);
        isMoveCar(car);
        expect(car.move).toHaveBeenCalled();
    });

    test("랜덤값이 3일 때 자동차가 이동하지 않아야 한다", () => {
        const car = { move: jest.fn() };
        Random.pickNumberInRange.mockReturnValue(3);
        isMoveCar(car);
        expect(car.move).not.toHaveBeenCalled();
    });
});

test("각 차 별로 값을 받고 자동차가 전진하거나 멈추어야 한다.", () => {
    /* 3개의 차를 기준으로 함 */
    const cars = [
        { move: jest.fn() },
        { move: jest.fn() },
        { move: jest.fn() }
    ];

    Random.pickNumberInRange
        .mockReturnValueOnce(5)
        .mockReturnValueOnce(3)
        .mockReturnValueOnce(4);

    raceStart(cars);

    expect(cars[0].move).toHaveBeenCalled();
    /* 3을 입력 받은 차는 정지해야 한다. */
    expect(cars[1].move).not.toHaveBeenCalled();
    expect(cars[2].move).toHaveBeenCalled();
});
