import RacingCar from "../src/RacingCar";
import { MissionUtils } from "@woowacourse/mission-utils";

describe("RacingCar 클래스 테스트", () => {
    test("자동차 이름과 초기 위치 설정", () => {
        const carNames = ["pobi", "woni"];
        const racingCar = new RacingCar(carNames);
        expect(racingCar.cars.length).toBe(2);
        expect(racingCar.cars[0].name).toBe("pobi");
        expect(racingCar.cars[0].position).toBe(0);
    });

    test("자동차 전진 여부 결정 (shouldMove)", () => {
        const carNames = ["pobi"];
        const racingCar = new RacingCar(carNames);
        expect(racingCar.shouldMove(4)).toBe(true);
        expect(racingCar.shouldMove(3)).toBe(false);
    });

    test("자동차 전진 로직 (moveCar)", () => {
        const carNames = ["pobi"];
        const racingCar = new RacingCar(carNames);
        const car = racingCar.cars[0];
        MissionUtils.Random.pickNumberInRange = jest.fn(() => 4);
        racingCar.moveCar(car);
        expect(car.position).toBe(1);

        MissionUtils.Random.pickNumberInRange = jest.fn(() => 3);
        racingCar.moveCar(car);
        expect(car.position).toBe(1);
    });

    test("우승자 결정 (getWinners)", () => {
        const carNames = ["pobi", "woni", "jun"];
        const racingCar = new RacingCar(carNames);
        racingCar.cars[0].position = 5;
        racingCar.cars[1].position = 3;
        racingCar.cars[2].position = 5;
        const winners = racingCar.getWinners();
        expect(winners).toEqual(["pobi", "jun"]);
    });
});
