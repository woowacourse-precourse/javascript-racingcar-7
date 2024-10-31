import { MissionUtils } from "@woowacourse/mission-utils";

const inputCarNames = async () => {
  const carNames = await MissionUtils.Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  return carNames;
};

const inputCount = async () => {
  const count = await MissionUtils.Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?\n"
  );
  return count;
};

export { inputCarNames, inputCount };
