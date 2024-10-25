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

  let race;
  beforeEach(() => {
    race = new CarRace();
  })

  test("자동차명 입력받기", async () => {
    const inputs = ["ferrari,redbull,mercedes,mclaren"];
    mockQuestions(inputs);
    
    const result = await race.getInputCars();
    expect(result).toEqual(["ferrari", "redbull", "mercedes", "mclaren"]);
  });

  test("이동 횟수 입력받기", async () => {
    const inputs = ["2"];
    mockQuestions(inputs);

    const result = await race.getInputLaps();
    expect(result).toBe(2);
  });

  test("전체 입력", async () => {
    const inputs = ["ferrari,redbull,mercedes,mclaren", "2"];
    mockQuestions(inputs);

    const result = await race.getAllInputs();
    expect(result.cars).toEqual(["ferrari", "redbull", "mercedes", "mclaren"]);
    expect(result.totalLaps).toBe(2);
  });
});