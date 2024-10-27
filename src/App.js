import { Console, MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    const rolling_number = () => {
      return MissionUtils.Random.pickNumberInRange(0, 9);
    };
    // 한번의 loop마다 자동차의 이동 유무 판단하는 함수
    const plus_point = (cars) => {
      const number_of_cars = cars.length;
      let number = 0;
      for (let i = 0; i < number_of_cars; i++) {
        number = rolling_number();
        if (number >= 4) {
          cars_score[i] += 1;
        }
      }
    };
    // 이동 횟수만큼 -를 출력하는 함수
    const print_points = (car_names, cars_score) => {
      for (let i = 0; i < car_names.length; i++) {
        let point = "-".repeat(cars_score[i]);
        Console.print(`${car_names[i]} : ${point}`);
      }
    };
    // 자동차 이름 입력 및 이동 횟수 입력
    Console.print(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
    );
    let name_input = await Console.readLineAsync("");
    let car_names = name_input.split(",");
    car_names = car_names.map((name) => name.trim());
    let cars_score = new Array(car_names.length).fill(0);

    let result = [];

    // 에러 조건 1 : 입력된 이름이 5자를 넘어가는가?
    for (let name of car_names) {
      if (name.length > 5) {
        throw new Error("[ERROR]");
      }
    }
    Console.print("시도할 횟수는 몇 회인가요?");
    const loop = await Console.readLineAsync("");

    // 자동차 이동 출력
    for (let i = 0; i < loop; i++) {
      plus_point(car_names);
      print_points(car_names, cars_score);
      Console.print("");
    }

    // 최종적으로 우승한 자동차의 이름 출력
    const max_score = Math.max(...cars_score);
    for (let i = 0; i < cars_score.length; i++) {
      if (cars_score[i] == max_score) {
        result.push(car_names[i]);
      }
    }
    Console.print(`최종 우승자 : ${result.join(", ")}`);
  }
}

export default App;
