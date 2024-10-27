import CarRace from "../src/CarRace";
import { MissionUtils } from "@woowacourse/mission-utils";

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

describe("레이스 테스트", () => {
  test("한 라운드 실행 테스트", async () => {
    const inputs = ["ferra,rdbll,merc, mclrn", "1"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();

    const carRace = new CarRace();
    await carRace.race();
    carRace.executeTotalLapsAndDisplay(1);

    expect(logSpy).toHaveBeenCalled();
  })

  test("우승자 결정", async () => {
    const inputs = ["ferra,rdbll,merc, mclrn", "3"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();

    const carRace = new CarRace();
    await carRace.race();
    carRace.cars.find(car => car.name === "ferra").distance = 5;
    carRace.cars.find(car => car.name === "rdbll").distance = 3;
    carRace.cars.find(car => car.name === "merc").distance = 2;
    carRace.cars.find(car => car.name === "mclrn").distance = 2;
    const winner = carRace.getLeadingCars();
    expect(winner).toEqual(["ferra"])
  })

  test("우승자 결정", async () => {
    const inputs = ["ferra,rdbll,merc, mclrn", "3"];
    mockQuestions(inputs);
    const logSpy = getLogSpy();

    const carRace = new CarRace();
    await carRace.race();
    carRace.cars.find(car => car.name === "ferra").distance = 5;
    carRace.cars.find(car => car.name === "rdbll").distance = 5;
    carRace.cars.find(car => car.name === "merc").distance = 2;
    carRace.cars.find(car => car.name === "mclrn").distance = 2;
    const winner = carRace.getLeadingCars();
    expect(winner).toEqual(["ferra", "rdbll"])
  })
});