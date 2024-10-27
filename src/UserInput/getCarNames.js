import { MissionUtils } from '@woowacourse/mission-utils';

const getCarNames = () => {
  return MissionUtils.Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) ',
  ).then((input) => {
    const names = input.split(',');
    if (names.some((name) => name.length > 5)) {
      throw new Error('[ERROR] 자동차 이름은 5자 이하만 가능합니다.');
    }
    return names;
  });
};

export default getCarNames;
