import { MissionUtils } from '@woowacourse/mission-utils';
//[x]  1. 자동차,시도횟수 형식에 입력받기 (4.)
//[x]  2.  이름이 5자 이하인 자동차 구분하기 (3.)
//[]  3.  잘못된 값 입력시 ERROR 발생시키기 (8.)
//[]  4. 랜덤한 전진 조건 정하기 (5. 1.)
//[]  5. 전진 조건에 맞게 출력하기 (2.)
//[]  6. 시도횟수만큼 출력후 마지막 출력의 -을 비교하기 (6.)
//[] 7. 최대 값의 자동차 이름들 출력하기 (6. 7.)

class App {
  // 자동차 이름 5자 이하 확인 함수
  onCheckName5(carList) {
    for (let name of carList) {
      if (name.length > 5) {
        throw Error('Error');
      }
    }
  }
  async run() {
    try {
      const carInput = await MissionUtils.Console.readLineAsync(
        '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
      );
      const carList = carInput.split(',').map((name) => name.trim());
      onCheckName5(carList);

      const tyyNumber =
        await MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?');

      MissionUtils.Console.print(`차: ${carList}`);
      MissionUtils.Console.print(`횟수: ${tyyNumber}`);
    } catch (error) {
      // reject 되는 경우
      MissionUtils.Console.print('[ERROR]');
    }
  }
}
export default App;
