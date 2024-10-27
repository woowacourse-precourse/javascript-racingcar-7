import { MissionUtils } from "@woowacourse/mission-utils";
import { maxScoreCar } from "../src/SearchWinner/SearchWinner.js";

describe("최종 우승자 테스트", () => {
  test("단독 우승", () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");

    const car_names_arr_input = ["kim", "lee", "choi", "park"];
    const car_racing_result_input = [4, 3, 5, 4];
    const output = ["최종 우승자 : choi"];

    maxScoreCar(car_names_arr_input, car_racing_result_input);

    output.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(output);
    });
  });

  test("공동 우승", () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");

    const car_names_arr_input = [
      "kim",
      "lee",
      "choi",
      "john",
      "peter",
      "jack",
      "mark",
      "yoon",
      "lim",
      "paul",
    ];
    const car_racing_result_input = [5, 7, 7, 6, 5, 4, 7, 3, 4, 6];
    const output = ["최종 우승자 : lee, choi, mark"];

    maxScoreCar(car_names_arr_input, car_racing_result_input);

    output.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(output);
    });
  });
});
