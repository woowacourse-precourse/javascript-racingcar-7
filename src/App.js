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

    MissionUtils.Console.print("\n실행 결과");
    const carDistance = this.playGame(car_list, try_number);
    this.printWinner(car_list, carDistance);
  }

  separateCarList(carName) {
    const car_list = carName.split(",");
    return car_list;
  }

  printWinner(carList, carDistance) {
    carDistance = carDistance.map((distance) => {
      return distance.length;
    });

    let winnerDistance = Math.max(...carDistance);
    let winner = [];
    carDistance.forEach((distance, index) => {
      if (winnerDistance == distance) {
        winner.push(carList[index]);
      }
    });
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
    const carDistance = new Array(carList.length).fill("");
    for (let j = 0; j < tryNumber; j++) {
      const moveCarList = this.makeMoveCarList(carList);
      for (let i = 0; i < carList.length; i++) {
        if (moveCarList[i] == true) {
          carDistance[i] += "-";
        }
        MissionUtils.Console.print(`${carList[i]} : ${carDistance[i]}`);
      }
      MissionUtils.Console.print(" ");
    }
    return carDistance;
  }
}

export default App;
