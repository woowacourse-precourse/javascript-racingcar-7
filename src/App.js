import { MissionUtils } from '@woowacourse/mission-utils';
//[x]  1. 자동차,시도횟수 형식에 입력받기 (4.)
//[x]  2.  이름이 5자 이하인 자동차 구분하기 (3.)
//[x]  3.  잘못된 값 입력시 ERROR 발생시키기 (8.)
//[x]  4.  랜덤한 전진 조건 정해서 출력하기 (5. 1. 2.)
//[x] 5.  시도횟수만큼 전진 조건에 맞게 출력하기 (2.)
//[x] 6.  마지막 출력의 -을 비교하여 최대 값의 자동차 이름들 출력하기 (6. 7.)

class App {
  // 자동차 이름 5자 이하 확인 함수
  onCheckName5(carList) {
    for (let name of carList) {
      if (name.length > 5 || name.length < 1) {
        throw new Error('[ERROR]');
      }
    }
  }
  // 구분 에러 확인 함수
  // 값이 없거나 빈 문자일때
  onCheckCarList(carList) {
    if (carList.some((name) => name.trim() === '')) {
      throw new Error('[ERROR]');
    }
    this.onCheckName5(carList);
  }
  // 횟수 에러 확인 함수
  onCheckTryNumber(tryNumber) {
    const checkNumber = Number(tryNumber);
    if (isNaN(checkNumber) || checkNumber <= 0) {
      throw new Error('[ERROR]');
    }
  }
  // 랜덤한 전진 값 구하는 함수
  onGetRandomGo() {
    return MissionUtils.Random.pickNumberInRange(0, 9);
  }
  //랜덤한 전진 함수
  onGetGOorNot(carList) {
    return carList.map((car) => {
      const Random = this.onGetRandomGo();
      return Random >= 4 ? '-' : '';
    });
  }
  // 자동차별 결과 출력 함수
  printResult(carList, results) {
    results.forEach((result, index) => {
      MissionUtils.Console.print(`${carList[index]} : ${result}`);
    });
    MissionUtils.Console.print('');
  }
  async run() {
    try {
      const carInput = await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
      );
      const carList = carInput.split(',').map((name) => name.trim());

      this.onCheckCarList(carList);

      const tryNumber =
        await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
      this.onCheckTryNumber(tryNumber);

      // 자동차별 결과 배열
      const results = Array(carList.length).fill('');

      // tryNumber 만큼 랜덤한 전진 결과
      for (let i = 0; i < tryNumber; i++) {
        const outputs = this.onGetGOorNot(carList);
        outputs.forEach((output, index) => {
          results[index] += output;
        });

        this.printResult(carList, results);
      }

      // 우승차 출력
      const maxLength = Math.max(...results.map((car) => car.length));
      const winner = carList.filter(
        (_, index) => results[index].length === maxLength,
      );
      MissionUtils.Console.print(`최종 우승자 : ${winner.join(', ')}`);
    } catch (error) {
      // reject 되는 경우
      throw new Error('[ERROR]');
    }
  }
}
export default App;
