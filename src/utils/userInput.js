import { Console } from '@woowacourse/mission-utils';
async function getCarList() {
  const carInput = await Console.readLineAsync(
    `경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n`,
  );

  const carList = carInput.split(',').map((name) => name.trim());

  return carList;
export { getCarList };
