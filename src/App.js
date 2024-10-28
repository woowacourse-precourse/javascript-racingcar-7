import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const race_car = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );

    const cars = race_car.split(",").map((car) => car.trim());
    for (let i = 0; i < cars.length; i++) {
      if (cars[i].length > 5) {
        throw Error("[ERROR] 이름은 5자 이하만 가능합니다.");
      }
    }
    const try_num = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

    let record = Array(cars.length).fill("");

    Console.print("실행 결과");

    for (let i = 0; i < try_num; i++) {
      this.racing(cars, record);
    }

    const winners = this.findWinners(cars, record);
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  racing(cars, record) {
    for (let c = 0; c < cars.length; c++) {
      const rand_num = MissionUtils.Random.pickNumberInRange(0, 9);
      this.recording(rand_num, record, c);
      Console.print(`${cars[c]} : ${record[c]}`);
    }
    Console.print("\n");
  }

  recording(rand_num, record, c) {
    if (rand_num >= 4) {
      record[c] += "-";
    }
  }

  findWinners(cars, record) {
    let record_length = record.map((x) => x.length);
    let winner_record = Math.max(...record_length);

    return cars.filter((_, index) => record_length[index] == winner_record);
  }
}

export default App;
