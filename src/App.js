import { MissionUtils } from "@woowacourse/mission-utils";
class App {
  async run() {
    const car_name = await MissionUtils.Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) \n"
    );
    const car_list = this.separateCarList(car_name);
    // 자동차 이름이 5자 이상이면 에러 처리

    const try_number = await MissionUtils.Console.readLineAsync(
      "시도할 횟수는 몇 회인가요? \n"
    );
    //횟수가 양의 정수가 아니면 에러 처리

    this.playGame(car_list, try_number);
  }

  separateCarList(carName) {
    const car_list = carName.split(",");
    return car_list;
  }

  checkMoveForward() {
    const try_move = MissionUtils.Random.pickNumberInRange(0, 9);
    if (try_move >= 4) {
      return true;
    }
    return false;
  }

  makeMoveCarList(carList) {
    const move_car_list = [];
    for (let i = 0; i < carList.length; i++) {
      const try_move = this.checkMoveForward();
      move_car_list.push(try_move);
    }
    return move_car_list;
  }

  playGame(carList, tryNumber) {
    const moveCarList = this.checkMoveForward(carList);
  }
}

export default App;
