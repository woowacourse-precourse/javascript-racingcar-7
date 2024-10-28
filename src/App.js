import { Console, Random } from "@woowacourse/mission-utils";

class App {
  async run() {
    try {
      let carNameInput = await Console.readLineAsync(`경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`);
      let carNames = this.validateCarNames(carNameInput);
      let raceCountInput = await Console.readLineAsync(`시도할 횟수는 몇 회인가요?\n`);
      let raceCount = parseInt(raceCountInput, 10);

    } catch (error) {
      Console.print(`[ERROR] ${error.message}`);
      throw error;
    }
  }

  /**
   * @author CWDll
   * @describe 입력받은 문자열을 계산하는 함수
   * @parameter {carNameInput: string[]}
   * @returnValue {carNames}
   */
  validateCarNames(carNameInput) {
    let carNames = carNameInput.split(",").map(name => name.trim());
    if (carNames.length < 2) {
      throw new Error("자동차 이름은 2개 이상 입력해야 합니다.");
    }
    carNames.forEach(name => {
      if(name.length === 0 || name.length > 5) {
        throw new Error("자동차 이름은 1자 이상 5자 이하만 가능합니다.");
      }
    })

    return carNames;
  }
}




export default App;
