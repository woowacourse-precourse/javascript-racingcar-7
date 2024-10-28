import { MissionUtils } from '@woowacourse/mission-utils';

export function getUserCarName() {
  return MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  ); // promist 반환
}
export function getUserRacingNum() {
  return MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?\n'); // promist 반환
}
export function printRacingState(carData) {
  carData.forEach((line) => {
    MissionUtils.Console.print(line);
  });
  // 한 턴이 끝난 후 빈 줄을 출력하여 구분
  MissionUtils.Console.print('');
}

export function printRacingWinner(winnerName) {
  MissionUtils.Console.print(`최종 우승자 : ${winnerName.join(', ')}`);
}
