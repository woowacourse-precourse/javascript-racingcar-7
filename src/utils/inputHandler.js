import { Console } from '@woowacourse/mission-utils';
import Validator from '../validators/Validator';

export const getNameInput = async () => {
  const nameString = await Console.readLineAsync(
    '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n'
  );
  Validator.checkNameString(nameString);

  const names = nameString.split(',');
  Validator.checkNames(names);

  return names;
};

export const getRoundCountInput = async () => {
  const roundCount = Number(
    await Console.readLineAsync('시도할 횟수는 몇 회인가요?\n')
  );
  Validator.checkRoundCount(roundCount);

  return roundCount;
};
