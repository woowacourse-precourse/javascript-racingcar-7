import { Console, Random } from "@woowacourse/mission-utils";
class App {
  INPUT_CAR_NAME =
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n";
  INPUT_TRY_COUNT = "시도할 회수는 몇회인가요?\n";
  WINNER_MESSAGE = "최종 우승자 : ";
  carsName = [];
  winner = [];
  answer_candidate = [];

  async getUserInput(message) {
    return await Console.readLineAsync(message);
  }
  async showInput(message) {
    return await Console.print(message);
  }

  initialize(size) {
    this.answer_candidate = new Array(size);
    for (let i = 0; i < size; i++) {
      this.answer_candidate[i] = new Array();
    }
  }

  getStartCondition() {
    return Random.pickNumberInRange(0, 9) >= 4;
  }

  compareWinner(maxLength, idx) {
    if (this.answer_candidate[idx].length === maxLength) {
      this.winner.push(this.carsName[idx]);
    }
  }

  getWinner() {
    const maxLength = Math.max(...this.answer_candidate.map((el) => el.length));
    for (let i = 0; i < this.answer_candidate.length; i++) {
      this.compareWinner(maxLength, i);
    }
  }

  moveCar(idx) {
    if (this.getStartCondition()) {
      this.answer_candidate[idx].push("-");
    }
  }

  async moveCars(carsName) {
    for (let j = 0; j < carsName.length; j++) {
      this.moveCar(j);
      await this.showInput(
        `${carsName[j]} : ${this.answer_candidate[j].join("")}`
      );
    }
  }

  validateCarName(name) {
    if (name.length < 1 || name.length > 5) {
      throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.");
    } else if (/[^a-zA-Zㄱ-힣,1-9]/g.test(name)) {
      throw new Error(
        "[ERROR] 자동차 이름은 영어 혹은 한글만 가능하며, 자동차간 구분자는 ,(컴마)로만 가능합니다."
      );
    }

    return name;
  }

  validateTryCount(count) {
    if (isNaN(count)) {
      throw new Error("[ERROR] 시도할 회수는 숫자만 입력할 수 있습니다.");
    }
  }

  async getAnswer(tryCount, carsName) {
    if (!carsName) throw new Error("[ERROR] 자동차 이름을 입력해주세요.");

    this.initialize(carsName.length);
    await this.showInput("\n실행 결과");

    for (let i = 0; i < tryCount; i++) {
      await this.moveCars(carsName);
      await this.showInput("");
    }

    this.getWinner();
  }

  async run() {
    const names = await this.getUserInput(this.INPUT_CAR_NAME);
    const tryCount = await this.getUserInput(this.INPUT_TRY_COUNT);

    this.carsName = names
      .split(",")
      .map((el) => this.validateCarName(el.trim()));

    this.validateTryCount(tryCount);

    await this.getAnswer(Number(tryCount), this.carsName);
    await this.showInput(`${this.WINNER_MESSAGE}${this.winner.join(", ")}`);
  }
}

export default App;
