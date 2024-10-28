import { MissionUtils } from '@woowacourse/mission-utils';

/**
 * 자동차 이름 입력을 받는다.
 *
 * @async
 * @function getCarNamesInput
 * @returns {Promise<string>} 사용자 입력 문자열
 */
export async function getCarNamesInput() {
  const carNamesInput = await MissionUtils.Console.readLineAsync(
    '경주에 참가할 자동차 이름을 입력해주세요. (각 이름은 쉼표로 구분합니다.)\n',
  );

  return carNamesInput.trim();
}

/**
 * 게임 시도 횟수 입력을 받는다.
 *
 * @async
 * @function getRoundCountInput
 * @returns {Promise<string>} 사용자 입력 문자열
 */
export async function getRoundCountInput() {
  const roundCountInput =
    await MissionUtils.Console.readLineAsync('시도할 횟수를 입력해주세요.\n');

  return roundCountInput;
}
