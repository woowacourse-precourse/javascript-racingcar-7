import { MissionUtils } from '@woowacourse/mission-utils';

export default async function getCarNamesInput() {
  const carNamesInput = await MissionUtils.Console.readLineAsync(
    '경주에 참가할 자동차 이름을 입력해주세요. (각 이름은 쉼표로 구분합니다.)\n',
  );
  return carNamesInput.trim();
}
