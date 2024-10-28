import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    let rand_num;
    let state;
    const race_car = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    const try_num = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    // 유효성 검사 하기 6자 이상이면 Error
    const cars = race_car.split(",").map((car) => car.trim()); //[ 'so', 'sun' ], 앞뒤 공백 제거
    let record = Array(cars.length).fill("");
    Console.print(record);

    Console.print("실행 결과");

    // for문 두번 돌아야됨. try 만큼, 그리고 출력할 때 cars 만큼
    for (let i = 0; i < try_num; i++) {
      for (let c = 0; c < cars.length; c++) {
        rand_num = MissionUtils.Random.pickNumberInRange(0, 9);
        if (rand_num >= 4) {
          record[c] += "-";
        }

        Console.print(`${cars[c]} : ${record[c]}`);
      }
      Console.print("\n");
    }

    // 잘못된 입력값은
    // 1. race_car 입력이 6자 이상일 때
    // 2. 경주 시 "" , "-" 말고 이외의 값이 들어올 때
  }
}

export default App;
