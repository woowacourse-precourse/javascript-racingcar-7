import Car from "../src/Car.js";
import {
  EMPTY_NAME_MESSAGE,
  MAX_NAME_MESSAGE,
} from "../src/constants/errorMessage.js";

describe("자동차 생성자 테스트", () => {
  test("올바른 자동차 정보로 Car 인스턴스 생성 테스트", async () => {
    // given
    const NAME = "BMW";

    // when
    const car = new Car(NAME);

    // then
    expect(car.getName()).toBe(NAME);
    expect(car.getProgressCount()).toBe(0);
  });

  test("자동차 이름 5글자 초과인 예외 테스트", async () => {
    // given
    const NAME = "Lamborghini";

    // when, then
    expect(() => {
      new Car(NAME);
    }).toThrow(MAX_NAME_MESSAGE);
  });

  test("자동차 이름 공백인 예외 테스트", async () => {
    // given
    const NAME = "";

    // when, then
    expect(() => {
      new Car(NAME);
    }).toThrow(EMPTY_NAME_MESSAGE);
  });
});

describe("자동차 메서드 테스트", () => {
  test("자동차 전진 테스트", async () => {
    // given
    const NAME = "BMW";

    // when
    const car = new Car(NAME);
    const initialProgessCount = car.getProgressCount();
    car.increaseProgressCount();

    // then
    expect(car.getProgressCount()).toBe(initialProgessCount + 1);
  });
});
