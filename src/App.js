import { MissionUtils } from '@woowacourse/mission-utils';
//[x]  1. 자동차,시도횟수 형식에 입력받기 (4.)
//[x]  2.  이름이 5자 이하인 자동차 구분하기 (3.)
//[x]  3.  잘못된 값 입력시 ERROR 발생시키기 (8.)
//[] 4.  랜덤한 전진 조건 정해서 출력하기 (5. 1. 2.)-> 함수에서 바로 return출력가능
//[] 5.  시도횟수만큼 출력후 마지막 출력의 -을 비교하기 (6.)
//[] 6.  최대 값의 자동차 이름들 출력하기 (6. 7.)
class App {
  // 자동차 이름 5자 이하 확인 함수
  onCheckName5(carList) {
    for (let name of carList) {
      if (name.length > 5) {
        throw new Error('Error');
      }
    }
  }
  // 구분 에러 확인 함수
  onCheckCarList(carList) {
    for (let name of carList) {
      if (name == '') {
        throw new Error('ERROR');
      }
    }
  }
  // 횟수 에러 확인 함수
  onCheckTryNumber(tryNumber) {
    const checkNumber = Number(tryNumber);
    if (isNaN(checkNumber) || checkNumber <= 0) {
      throw new Error('Error');
    }
  }
  async run() {
    try {
      const carInput = await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
      );
      const carList = carInput.split(',').map((name) => name.trim());
      this.onCheckName5(carList);
      this.onCheckCarList(carList);

      const tryNumber =
        await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');
      this.onCheckTryNumber(tryNumber);

      MissionUtils.Console.print(`차: ${carList}`);
      MissionUtils.Console.print(`횟수: ${tryNumber}`);
    } catch (error) {
      // reject 되는 경우
      MissionUtils.Console.print('[ERROR]');
    }
  }
}
export default App;
