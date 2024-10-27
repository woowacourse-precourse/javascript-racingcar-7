import { Console, Random } from "@woowacourse/mission-utils";


class App {
  async run() {

    // 올바른 입력을 확인하기 위한 함수

    const carsInputCheck = (cars,) => {

      // 자동차의 이름이 공란으로 들어왔을 때 에러 발생 시키기
      if (cars == "") {
        throw new Error("[ERROR] 올바른 자동차 이름을 입력해주세요.");
      }

      // 자동차의 이름을 ,를 기준으로 분리한 뒤, 자동차 이름의 길이가 길 시 에러 발생.
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

    const tryNumberCheck = (tryNumber) => {
      // 시도 횟수가 올바르지 않을 시 에러 발생
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

    const printNowRacing = (carList) => {
      for (let i = 0 ; i < carList.length; i++) {
        Console.print(carList[i][0] + " : " + '-'.repeat(carList[i][1]));
      }
    }


    const racingGame = (carList, tryNumber) => {
      while (tryNumber > 0) {
        carList = advanceCheck(carList);
        printNowRacing(carList);
        tryNumber--;
      }


    }


    try {
      const cars = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n');
      const tryNumber = await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n');

      const winner = racingGame(carsInputCheck(cars), tryNumberCheck(tryNumber));

    }
    catch {

    }


  }

}

export default App;
