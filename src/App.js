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
    this.simulateRaceRounds(numberInput);
    this.selectWinner();
  }

  // carInput을 받아서 carObject에 저장하는 함수
  handleCarInputString(carInput) {
    const carNames = carInput.split(",");
    carNames.forEach((carName) => {
      this.carObject[carName] = 0; // 임시로 0 대입
    });
  }

  //numberInput 바탕으로 각 라운드를 시뮬레이션하여 랜덤값 부여 함수
  simulateRaceRounds(numberInput) {
    for (let i = 0; i < numberInput; i++) {
      Object.keys(this.carObject).forEach((carName) => {
        this.carObject[carName] += this.moveOrStop(
          Math.floor(Math.random() * 10) // 0~9까지의 랜덤값
        );
      });
      Console.print(this.carObject);
    }
  }

  //전진 or 멈춤 판단 함수
  moveOrStop(randomNumber) {
    if (randomNumber >= 4) return 1;
    return 0;
  }

  //최종 우승자 판별 함수
  selectWinner() {
    const maxDistance = Math.max(...Object.values(this.carObject));
    const winners = Object.keys(this.carObject).filter(
      (carName) => this.carObject[carName] === maxDistance
    );
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;
