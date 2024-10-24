import { MissionUtils } from '@woowacourse/mission-utils';

export async function getCarNamesInput() {
  const carNamesInput = await MissionUtils.Console.readLineAsync(
    '경주에 참가할 자동차 이름을 입력해주세요. (각 이름은 쉼표로 구분합니다.)\n',
  );
  return carNamesInput.trim();
}

export async function getRoundCount() {
  const roundCountInput =
    await MissionUtils.Console.readLineAsync('시도할 횟수를 입력해주세요.\n');
  return roundCountInput;
}
