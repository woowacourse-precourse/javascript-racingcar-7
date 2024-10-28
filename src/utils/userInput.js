import { Console } from '@woowacourse/mission-utils';
import { checkEmpty, checkCarList, checkRound } from './errors';

async function getCarList() {
  const carInput = await Console.readLineAsync(
    `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`,
  );

  checkEmpty(carInput);
  const carList = carInput.split(',').map((name) => name.trim());

  checkCarList(carList);

  return carList;
}

async function getRound() {
  const round = await Console.readLineAsync(`시도할 횟수는 몇 회인가요?\n`);

  checkRound(round);

  return round;
}

export { getCarList, getRound };
