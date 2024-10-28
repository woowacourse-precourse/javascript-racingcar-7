import { Console } from '@woowacourse/mission-utils';

const getUserInput = async (message) => {
  return await Console.readLineAsync(message);
};

const userInputCarNames = async () => {
  return await getUserInput(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
};

const getUserInputTryCount = async () => {
  return await getUserInput('시도할 횟수는 몇 회인가요?\n');
};

export { getUserInput, userInputCarNames, getUserInputTryCount };
