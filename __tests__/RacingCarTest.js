import RacingCar from "../src/RacingCar";
import { MissionUtils } from "@woowacourse/mission-utils";
import { ErrorMessages } from "../src/Constant";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("RacingCar 테스트", () => {
  test.each([
    { name: "pobi" },
    { name: "123" }
  ])("RacingCar 인스턴스가 정상 생성되는 경우\nname : $name", ({ name }) => {
    const car = new RacingCar(name);
    expect(car.getName()).toEqual(name);
  })

  test.each([
    {
      case: "문자열의 크기가 0 인 경우",
      name: "",
      expects: ErrorMessages.INVALID_CAR_NAMES_ERROR
    },
    {
      case: "문자열의 크기가 5 보다 큰 경우",
      name: "123123",
      expects: ErrorMessages.INVALID_CAR_NAMES_ERROR
    }
  ])("RacingCar 인스턴스가 정상 생성되지 않는 경우\ncase : $case\nname : $name\nexpects : $expects", ({ name, expects }) => {
    expect(() => {
      const car = new RacingCar(name);
    }).toThrow(expects);
  })

  test.each([
    {
      name: "pobi",
      randoms: [4, 3],
      expects: [1, 1]
    },
    {
      name: "pobi",
      randoms: [0, 0, 0, 0, 4],
      expects: [0, 0, 0, 0, 1]
    },
    {
      name: "pobi",
      randoms: [9, 9, 9, 9, 3],
      expects: [1, 2, 3, 4, 4]
    },
  ])("RacingCar의 move() 메서드 동작 테스트\nrandoms : $randoms\nexpects : $expects", ({ name, randoms, expects }) => {
    const car = new RacingCar(name);
    mockRandoms(randoms);

    for (const expectedDistance of expects) {
      car.move();
      expect(car.getDistance()).toEqual(expectedDistance);
    }
  })
});
