import RaceGameService from "../../src/service/RaceGameService";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("[🏁 RaceGameService 테스트]", () => {
  let raceService;
  let onRoundEnd;
  let onBeforeStart;
  beforeEach(() => {
    raceService = new RaceGameService();
    onRoundEnd = console.log;
    onBeforeStart = console.log;
  });
  test("레이스게임을 준비할 수 있다.", () => {
    const carNames = ["chan", "wooni", "choi", "kofe"];
    const iteration = 5;
    raceService.ready(carNames, iteration, onRoundEnd);
    expect(raceService.status).toStrictEqual({
      status: "ready",
      cars: [
        { name: "chan", move: 0 },
        { name: "wooni", move: 0 },
        { name: "choi", move: 0 },
        { name: "kofe", move: 0 },
      ],
    });
  });

  test("레이스게임의 각 라운드를 진행 수 있다.", () => {
    const carNames = ["chan", "wooni", "choi", "kofe"];
    const iteration = 1;
    raceService.ready(carNames, iteration, onRoundEnd);
    mockRandoms([8,0,0,0]);
    raceService.playRound();
    expect(raceService.status).toStrictEqual({
      status: "playing",
      cars: [
        { name: "chan", move: 1 },
        { name: "wooni", move: 0 },
        { name: "choi", move: 0 },
        { name: "kofe", move: 0 },
      ],
    });
  });

  test("레이스게임은 우승자를 반환할 수 있다.", () => {
    const carNames = ["chan", "wonni", "choi", "kofe"];
    const iteration = 1;
    raceService.ready(carNames, iteration, onRoundEnd, onBeforeStart);
    mockRandoms([8,0,0,0]);
    raceService.start();
    const result = raceService.getResult();
    expect(result).toStrictEqual({
      status: "end",
      winners: ["chan"],
    });
  });
});
