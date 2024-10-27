import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const nameInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const nameList = this.splitNameInput(nameInput);
    const carNames = this.validateNameList(nameList);
  }
  catch(error) {
    throw new Error(`[ERROR] ${error.message}`);
  }

  splitNameInput(nameInput) {
    const carNames = nameInput.split(",");

    return carNames;
  }

  validateNameList(nameList) {
    if (nameList.length === 1) {
      throw new Error("자동차 이름은 쉼표로 구분하여 2개 이상 입력해 주세요.");
    }
  }
}

export default App;
