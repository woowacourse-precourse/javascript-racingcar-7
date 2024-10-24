import { Console, Random } from "@woowacourse/mission-utils";

function getCarNames(userInput) {
  const carNames = userInput.split(",");
  carNames.map((carName) => {
    if (carName.length > 5) {
      throw new Error("[ERROR] 이름은 5글자를 초과할 수 없습니다.");
    }
    return carName.trim();
  });
  return carNames;
}

function checkN(N) {
  const MINUS_REGEX = /-\d+/;

  if (MINUS_REGEX.test(N)) {
    throw new Error("[ERROR] 음수를 입력할 수 없습니다.");
  }

  if (isNaN(N)) {
    throw new Error("[ERROR] 숫자를 입력해주세요.");
  }

  return N;
}

function canMove() {
  const RANDOM_NUMBER = Random.pickNumberInRange(0, 9);
  let go = false;

  if (RANDOM_NUMBER >= 4) {
    go = true;
  }

  return go;
}

function moveOneStep(permissionToGo, N, carsResults) {
  for (let i = 0; i < N; i++) {
    const permission = permissionToGo();
    if (permission) {
      carsResults[i].position += "-";
    }
    Console.print(`${carsResults[i].name} : ${carsResults[i].position}`);
  }
  return;
}

function checkMaxPosition(carsResults) {
  let MAX_POSITION = 0;
  carsResults.map((car) => {
    if (car.position.length >= MAX_POSITION) {
      MAX_POSITION = car.position.length;
    }
  });
  return MAX_POSITION;
}

function determineWinner(carsResults, maxPosition) {
  let winners = [];
  carsResults.forEach((car) => {
    if (car.position.length == maxPosition) {
      winners.push(car.name);
    }
  });
  return winners;
}

class App {
  async run() {
    const carNamesUserInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.\n"
    );
    const carNames = getCarNames(carNamesUserInput);
    let carsResults = carNames.map((carName) => {
      return { name: carName, position: "" };
    });

    const N = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    checkN(N);

    Console.print("실행 결과");
    for (let i = 0; i < N; i++) {
      moveOneStep(canMove, carNames.length, carsResults);
      Console.print("");
    }
    const winners = determineWinner(carsResults, checkMaxPosition(carsResults));
    Console.print(`최종 우승자 : ${winners.join()}`);
  }
  return;
}

export default App;
