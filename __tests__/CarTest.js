import { MissionUtils } from "@woowacourse/mission-utils";
import Car from "../src/Car";

const createCar = (name) => new Car(name);

const mockRandoms = (number) => {
  const spy = jest.spyOn(MissionUtils.Random, "pickNumberInRange");
  spy.mockReturnValueOnce(number);
};

describe("자동차", () => {
  describe("자동차는 전진 또는 멈출 수 있다.", () => {
    test(
      "자동차가 있고 무작위 결과가 4 이상인 경우, 자동차가 움직이려고 시도하면, 이동 거리가 1 증가한다.",
      () => {
        // given
        const CAR_NAME = "ham";
        const car = createCar(CAR_NAME);
        mockRandoms(4);

        // when
        car.move();

        // then
        expect(car.dist).toEqual(1);
      },
    );

    test(
      "자동차가 있고 무작위 이동 결과가 4 미만인 경우, 자동차가 움직이려고 시도하면, 이동 거리가 변하지 않는다.",
      () => {
        // given
        const CAR_NAME = "ham";
        const car = createCar(CAR_NAME);
        mockRandoms(3);

        // when
        car.move();

        // then
        expect(car.dist).toEqual(0);
      },
    );
  });
});
