import { Console, MissionUtils } from "@woowacourse/mission-utils";
class App {
  // 현재 자동차 이동 유무 함수까지 (rolling_num 포함) commit 했음 + 아래 가이드용 주석까지
  // 이후 이동횟수만큼 - 출력하는 함수 완성(아마도 완성되었음..?) 해서 커밋하고 아래 for문 loop 완성해서 출력하기
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
    // 에러 조건 1 : 입력된 이름이 5자를 넘어가는가?
    for (let name of car_names) {
      if (name.length > 5) {
        throw new Error("[ERROR]");
      }
    }
    Console.print("시도할 횟수는 몇 회인가요?");
    const loop = await Console.readLineAsync("");

    // 자동차 이동
    for (let i = 0; i < loop; i++) {
      plus_point(car_names);
      print_points(car_names, cars_score);
      Console.print("");
      // print point 호출 (전진한 거리만큼 - 호출하는 함수)
    }
  }
}

export default App;
