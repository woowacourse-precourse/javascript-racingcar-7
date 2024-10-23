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

class App {
  async run() {
    const carNamesUserInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.\n"
    );
    const carNames = getCarNames(carNamesUserInput);
    let carsResults = carNames.map((carName) => {
      return { name: carName, position: "" };
    });
    Console.print(carsResults);

    const N = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    checkN(N);
  }
}

export default App;
