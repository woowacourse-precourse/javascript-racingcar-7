import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const nameInput = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const numberInput = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요?\n"
    );

    const nameList = this.splitNameInput(nameInput);
    this.validateNameList(nameList);
    const number = this.validateNumber(numberInput);
    const randomNumbers = this.generateRandomNumbers(nameList, number);
    console.log(randomNumbers);
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

    const emptyName = nameList.find((name) => name === "");
    if (emptyName !== undefined) {
      throw new Error("자동차 이름 사이에 공백이 포함되어 있습니다.");
    }

    const longName = nameList.find((name) => name.length > 5);
    if (longName !== undefined) {
      throw new error(`"${longName}"은(는) 5자를 초과합니다.`);
    }
  }

  validateNumber(numberInput) {
    if (!numberInput.trim() || isNaN(Number(numberInput))) {
      throw new Error("숫자를 입력해 주세요.");
    }

    const number = Number(numberInput);

    if (number <= 0) {
      throw new Error("시도할 횟수는 1 이상의 양수여야 합니다.");
    }

    return number;
  }

  generateRandomNumbers(nameList, number) {
    const randomNumbers = [];

    for (let i = 0; i < nameList.length * number; i++) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
      randomNumbers.push(randomNumber);
    }

    return randomNumbers;
  }
}

export default App;
