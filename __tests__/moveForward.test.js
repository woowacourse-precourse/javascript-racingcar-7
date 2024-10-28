import { moveFoward } from "../src/features/moveForward.js";
import { isForwardable } from "../src/features/isForwardable.js";
import { Console } from "@woowacourse/mission-utils";
import { PROGRESS } from "../src/config/config.js";
import { Car } from "../src/models/Car.js";

jest.mock("../src/features/isForwardable.js");

describe("moveFoward 함수 테스트", () => {
  let carList;

  beforeEach(() => {

    carList = [
      new Car("pobi"),
      new Car("woni"),
    ];

    // Console.print 메서드를 모킹
    Console.print = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("isForwardable이 true일 때 각 자동차가 moveForward를 호출하는지 확인", () => {
    // isForwardable이 true를 반환하도록 설정
    isForwardable.mockReturnValue(true);

    moveFoward(carList);

    // 모든 자동차의 forwardCount가 증가했는지 확인
    expect(carList[0].forwardCount).toBe(1);
    expect(carList[1].forwardCount).toBe(1);

    // getStatus가 올바르게 호출되어 Console.print에 결과가 출력되는지 확인
    const expected = `${carList[0].name} : ${PROGRESS}\n${carList[1].name} : ${PROGRESS}\n`;
    expect(Console.print).toHaveBeenCalledWith(expected);
  });

  test("isForwardable이 false일 때 moveForward가 호출되지 않는지 확인", () => {
    // isForwardable이 false를 반환하도록 설정
    isForwardable.mockReturnValue(false);

    moveFoward(carList);

    // forwardCount가 증가하지 않았는지 확인
    expect(carList[0].forwardCount).toBe(0);
    expect(carList[1].forwardCount).toBe(0);

    // getStatus가 호출된 결과가 Console.print에 출력되는지 확인
    const expected = `${carList[0].name} : \n${carList[1].name} : \n`;
    expect(Console.print).toHaveBeenCalledWith(expected);
  });
});