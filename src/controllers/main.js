import { Console, Random } from "@woowacourse/mission-utils";

const Main = async () => {
  Console.print("프로그램이 실행되었습니다.");

  const carInputName = await Console.readLineAsync("경주할 차 이름 입력");

  const isTryNumber = await Console.readLineAsync("시도할 횟수 입력");

  // 검증 - 공백
  if (carInputName.trim().length === 0 || isTryNumber.trim().length === 0) {
    throw new Error("[ERROR] 입력값이 비었습니다.");
  }

  if (carInputName === null || isTryNumber === null) {
    throw new Error("[ERROR] 입력값이 비었습니다.");
  }

  // isTryNumber가 숫자로 변환되면서 정수인지 검사
  if (Number.isInteger(isTryNumber) === isNaN) {
    throw new Error("[ERROR] 정수만 입력해주세요.");
  }

  const parseNumber = Number(isTryNumber);

  // isTryNumber가 100번 이하인지
  if (parseNumber > 100) {
    throw new Error("[ERROR] 시도할 횟수는 100번 이하여야합니다.");
  }

  class Car {
    constructor(name) {
      this.name = name;
      this.advance = 0;
    }

    addAdvance() {
      this.advance++;
    }
  }

  class CarList {
    constructor() {
      this.cars = [];
    }

    addCar(name) {
      this.cars.push(new Car(name));
    }
  }

  const carList = new CarList();

  const createCarList = () => {
    const getCarList = carInputName.split(",");
    getCarList.forEach((name) => carList.addCar(name.trim()));
  };

  createCarList();

  const gameController = (parseNumber) => {
    for (let i = 0; i < parseNumber; i++) {
      raceController();
    }
  };

  const raceController = () => {
    carList.cars.forEach((car) => {
      raceRound(car);
    });
    raceRoundResult();
  };

  const raceRound = (car) => {
    const randomResult = Random.pickNumberInRange(0, 9);
    if (randomResult >= 4) {
      car.addAdvance();
    }
  };

  const raceRoundResult = () => {
    carList.cars.forEach((car) => {
      const generateAdvanceSymbol = (advance) => "-".repeat(advance);
      const resultAdvanceSymbol = generateAdvanceSymbol(car.advance);
      Console.print(`${car.name} : ${resultAdvanceSymbol}`);
    });
  };

  gameController(parseNumber);

  const gameResultController = () => {
    const getWinner = () => {
      const isArrayAdvance = carList.cars.map((car) => car.advance);
      const isMaxAdvance = Math.max(...isArrayAdvance);
      const isWinnerCar = carList.cars.filter(
        (car) => car.advance === isMaxAdvance
      );

      // 우승자 이름 배열을 생성하고 출력
      const isWinnerName = isWinnerCar.map((car) => car.name);
    };

    getWinner();
  };

  gameResultController();
};

export default Main;
