import { Console, Random } from "@woowacourse/mission-utils";


class App {
  async run() {

    // 자동차 이름의 입력이 올바른지 확인한다.
    const carsInputCheck = (cars,) => {

      if (cars == "") {
        throw new Error("[ERROR] 올바른 자동차 이름을 입력해주세요.");
      }

      const carList = cars.split(',');

      for (let i = 0; i < carList.length; i++) {
        if (carList[i].length > 5) {
          throw new Error("[ERROR] 자동차 이름의 길이가 5자를 초과합니다.");
        }

        // 전진 횟수 확인을 위해 2차원 배열로 변경
        carList[i] = [carList[i], 0];
      }

      return carList
    }

    // 실행 횟수의 입력이 올바른지 확인한다.
    const tryNumberCheck = (tryNumber) => {
      tryNumber = Number(tryNumber);

      if (isNaN(tryNumber) || tryNumber < 0) {
        throw new Error("[ERROR] 올바른 시도 횟수를 입력해주세요.");
      }

      return tryNumber
    }

    // 전진 여부를 확인하여 차를 전진시킨다.
    const advanceCheck = (carList) => {
      for (let i = 0; i < carList.length; i++) {
        if (Random.pickNumberInRange(0, 9) >= 4) {
          carList[i][1]++;
        }
      }

      return carList
    }


    // 현재 레이싱 상황을 출력한다.
    const printNowRacing = (carList) => {
      for (let i = 0 ; i < carList.length; i++) {
        Console.print(carList[i][0] + " : " + '-'.repeat(carList[i][1]));
      }
      Console.print('\n');
    }


    // 우승자 목록을 찾는 함수
    const winnerList = (carList) => {
      let max = 0;

      // 우승자를 찾기 위해 최대 전진 횟수를 찾는다.
      for (let car of carList) {
        if (car[1] > max){
          max = car[1];
        }
      }

      const winner = [];

      for (const car of carList) {
        if (car[1] == max) {
          winner.push(car[0])
        }
      }
      
      return winner
    }


    // 레이싱 게임을 실행시키는 함수
    const racingGame = (carList, tryNumber) => {
      Console.print('\n실행 결과');
      while (tryNumber > 0) {
        carList = advanceCheck(carList);
        printNowRacing(carList);
        tryNumber--;
      }

    }

    const winnerPrint = (winnerList) => {
      if (winnerList.length == 1) {
        Console.print("최종 우승자 : " + winnerList[0]);
      } else {
        Console.print("최종 우승자 :" + winnerList.join(", "));
      }
    }


    try {
      const cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const tryNumber = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

      const carList = carsInputCheck(cars);

      racingGame(carList, tryNumberCheck(tryNumber));

      const winner = winnerList(carList);

      winnerPrint(winner);
    }
    catch (error) {
      throw error;
    }

  }

}

export default App;
