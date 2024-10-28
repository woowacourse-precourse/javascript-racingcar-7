import { MissionUtils } from '@woowacourse/mission-utils';

const getMoveCount = () => {
  return MissionUtils.Console.readLineAsync('시도할 횟수는 몇 회인가요?').then(
    (input) => {
      const trials = parseInt(input, 10);
      if (Number.isNaN(trials) || trials <= 0) {
        throw new Error('[ERROR] 이동 횟수는 1 이상의 정수여야 합니다.');
      }
      return trials;
    },
  );
};

export default getMoveCount;
