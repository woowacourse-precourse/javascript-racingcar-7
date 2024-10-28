import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  constructor() {
    this.car_names = [];
    this.game_results = [];
  }
  
  // 3. 게임에서 사용할 랜덤한 정수 함수 선언
  random_number() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
  
  // 4. 게임 함수 선언
  game(rounds) {
    for (let i = 0; i < rounds; i++) {
      const random_numbers = this.car_names.map(() => this.random_number());
      this.update_round_result(random_numbers);
      this.print_round_result();
      Console.print("\n");
    }
  }

  // 4. 각 라운드별 결과 업데이트 함수
  update_round_result(random_numbers) {
    random_numbers.forEach((number, index) => {
      if (this.game_results[index] === undefined) {
        this.game_results[index] = 0;
      }
      if (number >= 4) {
        this.game_results[index] += 1;
      }
    });
  }

  // 4. 각 라운드별 결과 프린트 함수
  print_round_result() {
    this.car_names.forEach((name, index) => {
      let round_result = "";
      if (this.game_results[index] !== undefined) {
        round_result = "-".repeat(this.game_results[index]);
      }
      Console.print(`${name} : ${round_result}`);
    });
  }
  
  async run() {
    // 1. 자동차 입력 받기 : 쉼표(,)로 구분하여 저장
    const car_input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    
    // 5. 예외 처리 1 : 자동차 이름은 각각 5자 이하만 가능하게 확인하는 함수 호출
    if (car_input.includes(",")) {
      this.car_names = car_input.split(",");
      this.car_name_length(this.car_names);
    }
    
    // 2. 게임을 몇번 시도할 건지 횟수 입력 받기(횟수를 라운드로 표현)
    const number_input = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");
    const rounds = Number(number_input);
  }
}

export default App;