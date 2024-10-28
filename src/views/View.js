import { MissionUtils } from '@woowacourse/mission-utils';

export function getUserCarName() {
  return MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  );
}

export function getUserRaceAttempts() {
  return MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'); // promist 반환
}

export function displayRaceState(carData) {
  carData.forEach((line) => {
    MissionUtils.Console.print(line);
  });
  
  MissionUtils.Console.print('');
}

export function displayWinners(winnerName) {
  MissionUtils.Console.print(`최종 우승자 : ${winnerName.join(', ')}`);
}
