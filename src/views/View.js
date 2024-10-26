import { MissionUtils } from '@woowacourse/mission-utils';

export function getUserInput() {
  return MissionUtils.Console.readLineAsync(''); // promist 반환
}

export function printRacingState(carData) {
  carData.forEach((line) => {
    MissionUtils.Console.print(line);
  });
  // 한 턴이 끝난 후 빈 줄을 출력하여 구분
  MissionUtils.Console.print('');
}
