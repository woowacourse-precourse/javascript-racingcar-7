import { Console, Random } from "@woowacourse/mission-utils";
class App {
  async run() {
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    let inputCarName = await Console.readLineAsync("");
    let arrCarName = inputCarName.split(",");
    let numberOfCars = arrCarName.length;
    carNameValidation(arrCarName);

    Console.print("시도할 횟수는 몇 회인가요?");
    let playTimes = await Console.readLineAsync("");
    playTimesValidation(playTimes);
    
    Console.print("\n실행 결과");
    let cars = arrCarName.map((name) => new Car(name));
    for (let count = 0; count < playTimes; count++) {
      roundResultPrint(cars);
    }
    
    getWinner(cars);
  }
}

function carNameValidation(arrCarName) {
  let carNameResult = arrCarName.every(car => car.length <= 5);
  if(carNameResult == false) {
    throw new Error("[Error] 자동차 이름은 5자 이하만 가능합니다.");
  }
}

function playTimesValidation(playTimes) {
  if(playTimes == 0) {
    return 0;
  }
  else if(playTimes % 1 == 0 && playTimes > 0) {
    return 0;
  }
  else if (playTimes < 0){
    throw new Error("[Error] 음수를 입력할 수 없습니다.");
  }
  else {
    throw new Error("[Error] 이동 횟수는 자연수만 가능합니다.");
  }
}
class Car {
  constructor(name) {
    this.name = name;
    this.playTimes = 0;
  }

  randomMove() {
    let randomNumber = Random.pickNumberInRange(0, 9);
    if (randomNumber >= 4) {
      this.playTimes++;
    }
  }
}

function race(cars) {
  cars.forEach((car) => {
    car.randomMove();
  });
  return cars;
}

function roundResultPrint(cars) {
  let carsMove = race(cars);
  for (let carNumber = 0; carNumber < carsMove.length; carNumber++) {
    let moveDistance = "";
    for (let move = 0; move < carsMove[carNumber].playTimes; move++) {
      moveDistance += "-";
    }
    Console.print(carsMove[carNumber].name + " : " + moveDistance);
  }
  Console.print("");
}

function getWinner(cars) {
  let carsplayTimesArray = cars.map((car) => car.playTimes);
  let maxMove = Math.max(...carsplayTimesArray);
  let winners = [];
  for (let carNumber = 0; carNumber < cars.length; carNumber++) {
    if (maxMove == cars[carNumber].playTimes) {
      winners.push(cars[carNumber].name);
    }
  }
  let winner = winners.join(", ");
  Console.print("최종 우승자 : " + winner);
}
export default App;
