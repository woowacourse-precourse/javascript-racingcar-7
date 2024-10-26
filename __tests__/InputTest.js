import CarRace from "../src/CarRace";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

describe("입력 받기", () => {

  let racing;
  beforeEach(() => {
    racing = new CarRace();
  })

  test("자동차명 입력받기", async () => {
    const inputs = ["ferra,rdbll,merc, mclrn"];
    mockQuestions(inputs);
    
    const result = await racing.getInputCars();
    expect(result).toEqual(["ferra", "rdbll", "merc", "mclrn"]);
  });

  test("이동 횟수 입력받기", async () => {
    const inputs = ["2"];
    mockQuestions(inputs);

    const result = await racing.getInputLaps();
    expect(result).toBe(2);
  });

  test("전체 입력", async () => {
    const inputs = ["ferra,rdbll,merc, mclrn", "2"];
    mockQuestions(inputs);

    const result = await racing.getAllInputs();
    expect(result.cars).toEqual(["ferra", "rdbll", "merc", "mclrn"]);
    expect(result.totalLaps).toBe(2);
  });

  // ERROR TEST
  test("자동차명이 중복될 경우", async () => {
    const inputs = ["rdbll, rdbll, merc, mclrn", "3"];
    mockQuestions(inputs);
    
    await expect(racing.race()).rejects.toThrow("[ERROR] : 자동차 이름은 중복되거나 공백일 수 없습니다")
  });
  test("자동차명이 공백일 경우", async () => {
    const inputs = ["rdbll, rdbll, , mclrn", "3"];
    mockQuestions(inputs);
    
    await expect(racing.race()).rejects.toThrow("[ERROR] : 자동차 이름은 중복되거나 공백일 수 없습니다")
  });
  test("자동차명이 5자 초과일 경우", async () => {
    const inputs = ["ferrari, redbu, merc, mclrn", "3"];
    mockQuestions(inputs);
    
    await expect(racing.race()).rejects.toThrow("[ERROR] : 자동차의 이름은 5자 이하만 가능합니다 (ferrari)")
  });
  test("입력된 횟수가 숫자가 아닐 경우", async () => {
    const inputs = ["ferra, redbu, merc, mclrn", "d"];
    mockQuestions(inputs);
    
    expect(racing.race()).rejects.toThrow("[ERROR] : 입력값이 비어있거나 숫자가 아닙니다")
  });
  test("입력된 횟수가 양수가 아닌 경우", async () => {
    const inputs = ["ferra, redbu, merc, mclrn", "-2"];
    mockQuestions(inputs);
    expect(racing.race()).rejects.toThrow("[ERROR] : 입력값은 0보다 큰 자연수이어야 합니다")
  });
  test("입력값이 소수인 경우", async () => {
    const inputs = ["ferra, redbu, merc, mclrn", "3.3"];
    mockQuestions(inputs);
    
    expect(racing.race()).rejects.toThrow("[ERROR] : 입력값은 양의 정수이어야 합니다")
  });
});