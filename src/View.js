import { Console } from "@woowacourse/mission-utils";

class View {
  #inputCarNameRegx = /^([a-zA-z]{1,5})(,[a-zA-Z]{1,5})*$/

  #carInputMessage = "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
  #raceCount = "시도할 횟수는 몇 회인가요?\n";

  async readInputCar() {
    const carNames = await Console.readLineAsync(this.#carInputMessage);

    if (!this.#inputCarNameRegx.test(carNames)){
      throw new Error("[ERROR] : 잘못된 이름 입력\n");
    }

    return carNames;
  }

  async readInputRaceCount() {
    const raceCountStr = await Console.readLineAsync(this.#raceCount);
    const raceCount = Number(raceCountStr);
    if (raceCount==NaN || raceCount <= 0){
      throw new Error("[ERROR] : 잘못된 숫자 입력\n");
    }

    return raceCount;
  }
}

export default View;