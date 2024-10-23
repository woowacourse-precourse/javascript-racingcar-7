import { Console, Random } from "@woowacourse/mission-utils";

function getCarNames(userInput) {
  const carNames = userInput.split(",");
  carNames.map((carName) => {
    return carName.trim();
  });
  return carNames;
}
class App {
  async run() {
    let userInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.\n"
    );
    getCarNames(userInput);
  }
}

export default App;
