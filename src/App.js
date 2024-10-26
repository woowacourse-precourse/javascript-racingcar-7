import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const cars = await inputCars();
    const count = await inputCount();
  }
}

const inputCars = async () => {
  const inputCars = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  const cars = inputCars.split(",").map((car) => car.trim());

  return cars;
};

const inputCount = async () => {
  const count = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

  return count;
};

const randomNum = async (carsCnt) => {
  const carsRandomNumArr = new Array(carsCnt).fill(0);

  for (let i = 0; i < carsCnt; i++) {
    carsRandomNumArr[i] = MissionUtils.Random.pickNumberInRange(0, 9);
  }

  return carsRandomNumArr;
};

const racingCar = async (result, randomNumArr) => {
  randomNumArr.map((num, index) => num >= 4 && (result[index] += 1));

  return result;
};

export default App;
