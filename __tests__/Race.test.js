import Race from "../src/models/Race";
import { Console } from "@woowacourse/mission-utils";

describe("Race 클래스 테스트", () => {
  let race;

  beforeEach(() => {
    const carNames = ["car1", "car2", "car3"];
    const totalRound = 3;
    race = new Race(carNames, totalRound);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("getWinner: 가장 멀리 이동한 자동차를 우승자로 반환한다.", () => {
    race.cars[0].position = 2;
    race.cars[1].position = 3;
    race.cars[2].position = 1;

    expect(race.getWinner()).toEqual(["car2"]);
  });

  test("getWinner: 두 명 이상의 우승자가 발생할 경우 쉼표(,)로 구분하여 반환한다.", () => {
    race.cars[0].position = 2;
    race.cars[1].position = 3;
    race.cars[2].position = 3;

    expect(race.getWinner()).toEqual(["car2", "car3"]);
  });

  test("start: 전체 레이스 결과 및 최종 우승자를 출력한다.", () => {
    const printSpy = jest.spyOn(Console, "print");

    jest
      .spyOn(race.cars[0], "move")
      .mockImplementation(() => (race.cars[0].position += 2));
    jest
      .spyOn(race.cars[1], "move")
      .mockImplementation(() => (race.cars[1].position += 3));
    jest
      .spyOn(race.cars[2], "move")
      .mockImplementation(() => (race.cars[2].position += 1));

    race.start();

    expect(printSpy).toHaveBeenCalledWith("\n실행 결과");
    expect(printSpy).toHaveBeenCalledWith("최종 우승자 : car2");
  });

  test("runARound: 각 자동차의 이름과 이동 상태가 출력된다.", () => {
    const printSpy = jest.spyOn(Console, "print");

    jest
      .spyOn(race.cars[0], "move")
      .mockImplementation(() => (race.cars[0].position += 1));
    jest
      .spyOn(race.cars[1], "move")
      .mockImplementation(() => (race.cars[1].position += 2));
    jest
      .spyOn(race.cars[2], "move")
      .mockImplementation(() => (race.cars[2].position += 3));

    race.runARound();

    expect(printSpy).toHaveBeenCalledWith("car1 : -");
    expect(printSpy).toHaveBeenCalledWith("car2 : --");
    expect(printSpy).toHaveBeenCalledWith("car3 : ---");
    expect(printSpy).toHaveBeenCalledWith("");
  });
});
