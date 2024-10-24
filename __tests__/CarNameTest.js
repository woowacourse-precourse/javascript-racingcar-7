import { mockQuestions } from "./testUtils.js";
import { read } from "../src/lib/utils.js";
import { handleNameErrors } from "../src/lib/validations.js";

const validateCarNames = async (type, message) => {
  const input = await read();
  const names = input.split(",").map((name) => name.trim());

  if (type === "pass") {
    expect(input).toEqual(message);
  }

  if (type === "error") {
    handleNameErrors(names);
  }
};

describe("자동차 이름 테스트", () => {
  const ERROR_CASES = [
    [["car1,car2,car123"], "[ERROR] 5자 이하로 작성해야 합니다."],
    [["car1,car2,car2"], "[ERROR] 중복된 이름은 허용되지 않습니다."],
    [[" "], "[ERROR] 이름은 공백일 수 없습니다."],
    [["car1"], "[ERROR] 2개 이상의 이름을 적어주세요."],
  ];

  const PASS_CASES = [
    [["car1,car2,car3,car4"], "car1,car2,car3,car4"],
    [["1,2,345"], "1,2,345"],
  ];

  test.each(ERROR_CASES)("이름 에러 체크 테스트", async (inputs, message) => {
    mockQuestions(inputs);
    await expect(validateCarNames("error")).rejects.toThrow(message);
  });

  test.each(PASS_CASES)("이름 통과 체크 테스트", async (inputs, message) => {
    mockQuestions(inputs);
    await validateCarNames("pass", message);
  });
});
