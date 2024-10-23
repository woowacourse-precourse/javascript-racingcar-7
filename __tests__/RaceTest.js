import Race from "../src/Race.js";
import Car from "../src/Car.js";
import { NUMBER } from "../src/Constants/constants.js";

describe("전진 메소드(Race.checkProgress()) 테스트", () => {
  const car = new Car("su");
  const race = new Race([car]);

  afterEach(() => {
    car.progress.mockRestore();
  });

  test(`무작위 값이 ${NUMBER.CAN_PROGRESS} 이상일 경우 전진(Car.progress()실행)`, async () => {
    jest.spyOn(car, "progress");

    const TEST_VALUE_ARR = [
      NUMBER.CAN_PROGRESS,
      NUMBER.CAN_PROGRESS + 1,
      NUMBER.RANDOM_MAX,
    ];

    TEST_VALUE_ARR.map(async (value) => {
      await race.checkProgress(value, car);
    });

    expect(car.progress).toHaveBeenCalledTimes(TEST_VALUE_ARR.length);
  });

  test(`무작위 값이 ${NUMBER.CAN_PROGRESS} 미만일 경우 정지(Car.progress()실행x)`, async () => {
    jest.spyOn(car, "progress");
    await race.checkProgress(NUMBER.CAN_PROGRESS - 1, car);
    await race.checkProgress(NUMBER.RANDOM_MIN, car);
    expect(car.progress).not.toHaveBeenCalled();
  });
});
