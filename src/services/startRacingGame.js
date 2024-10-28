import { MissionUtils, Console } from '@woowacourse/mission-utils';

function StartRacingGame(carList, round, score) {
  Console.print('실행 결과\n');
  for (let i = 0; i < round; i++) {
    carList.forEach((car, idx) => {
      const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);

      if (randomNum >= 4) {
        score[idx] += '-';
      }
      Console.print(car + ' : ' + score[idx]);
    });
    Console.print('');
  }
}

export { StartRacingGame };
