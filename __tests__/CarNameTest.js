import { mockQuestions } from "./testUtils.js";
import { NAME_ERROR } from "../src/lib/errors.js";
import { read } from "../src/lib/utils.js";

const handleNameErrors = (names) => {
  // 이름의 길이가 0인 경우
  if (names.some((name) => name === "")) {
    throw new Error(NAME_ERROR.EM);
  }

  // 이름의 길이가 5보다 큰 경울
  if (names.some((name) => name.length > 5)) {
    throw new Error(NAME_ERROR.MAX_NAME_LENGTH);
  }

  // 중복된 자동차 이름이 있는 경우
  if (new Set(names).size !== names.length) {
    throw new Error(NAME_ERROR.DUPLICATED);
  }

  // 자동차 이름이 2개 미만인 경우
  if (names.length < 2) {
    throw new Error(NAME_ERROR.MIN_NAMES);
  }
};

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
