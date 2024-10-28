import { Console, Random } from "@woowacourse/mission-utils";
import CarNameValidator from "./CarNameValidator"; // 자동차 이름 검증 임포트
import RoundValidator from "./RoundValidator"; // 라운드 검증 임포트
import CarRace from "./CarRace"; // Race 컴포넌트 임포트
import ResultPrinter from "./ResultPrinter"; // ResultPrinter 컴포넌트 임포트

class App {
  constructor() {
    this.carNames = []; // 자동차 이름 목록
    this.numberOfRounds = 0; // 시도할 횟수
    this.roundResults = []; // 각 라운드의 결과
  }

  async run() {
    await this.getCarNames(); // 자동차 이름 요청
    await this.getRounds(); // 시도 횟수 요청
    const race = new CarRace(this.carNames, this.numberOfRounds); // Race 인스턴스 생성
    this.roundResults = race.startRace(); // 경주 시작
    ResultPrinter.printResults(this.carNames, this.roundResults); // 최종 결과 출력
  }

  async getCarNames() {
    const input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    this.carNames = CarNameValidator.validate(String(input)); // 자동차 이름 검증
  }

  async getRounds() {
    const input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    this.numberOfRounds = RoundValidator.validate(String(input)); // 시도 횟수 검증
  }
}

export default App;
