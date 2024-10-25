import { Console } from "@woowacourse/mission-utils";

class App {
  carObject = {};

  async run() {
    const carInput = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const numberInput = await Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    this.handleCarInputString(carInput);
  }

  // carInput을 받아서 carObject에 저장하는 함수
  handleCarInputString(carInput) {
    const carNames = carInput.split(",");
    carNames.forEach((carName) => {
      this.carObject[carName] = 0; // 임시로 0 대입
    });
    Console.print(carNames);
  }
}

export default App;
