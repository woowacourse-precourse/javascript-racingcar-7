import { MissionUtils } from "@woowacourse/mission-utils";
import { startCarRacing } from "../src/Component/CarRacing.js";

describe("자동차 경주 결과 출력 테스트", () => {
  test("경주 결과", () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");

    const mockNumber = [5, 3, 8, 1, 8, 6, 4, 3, 7, 7, 2, 9, 1, 2, 3];
    const mockRandom = jest.spyOn(MissionUtils.Random, "pickNumberInRange");

    mockNumber.forEach((value) => {
      mockRandom.mockImplementationOnce(() => value);
    });

    const car_names_arr_input = ["kim", "lee", "choi"];
    const car_racing_result_input = [0, 0, 0];
    const attempt_number_input = 5;
    const output = ["\n실행 결과", "kim : ---", "lee : -", "choi : ----"];

    startCarRacing(
      car_names_arr_input,
      car_racing_result_input,
      attempt_number_input
    );

    output.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(output);
    });

    logSpy.mockRestore();
    MissionUtils.Random.pickNumberInRange.mockRestore();
  });
});
