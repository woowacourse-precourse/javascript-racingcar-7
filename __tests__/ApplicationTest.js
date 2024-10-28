import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import SetCarMovementModel from "../src/model/SetCarMovementModel.js";
import InputView from "../src/view/InputView.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  test("이름과 횟수를 입력받아 랜덤한 2차원 배열로 반환할 수 있다", async () => {
    //given
    const TRY_COUNT = 2;
    const carNames = ["pobi", "woni"];
    const expectResult = [
      [4, 2],
      [1, 3],
    ];
    mockRandoms([4, 2, 1, 3]);

    //when
    const carMovementModel = new SetCarMovementModel();
    const carMovement = carMovementModel.setCarMovementValues(
      carNames,
      TRY_COUNT
    );

    //then
    expect(carMovement).toEqual(expectResult);
  });

  test("자동차 별로 매 순간의 이동 거리를 계산할 수 있다", async () => {});

  test("전체 기능 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("예외처리1 : 비어있는 사용자 이름", async () => {
    const inputs = ["pobi,javaji,,jake"];
    mockQuestions(inputs);

    //when
    const inputView = new InputView();

    //then
    await expect(inputView.getCarNames()).rejects.toThrow("[ERROR]");
  });

  test("예외처리2 : 시도할 횟수가 0이하인 경우", async () => {
    // given
    const TRY_COUNT = ["-1"];
    mockQuestions(TRY_COUNT);

    // when
    const inputView = new InputView();

    // then
    await expect(inputView.getTryCount()).rejects.toThrow("[ERROR]");
  });
});
