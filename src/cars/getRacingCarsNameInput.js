import { Console } from '@woowacourse/mission-utils';

const getRacingCarsNameInput = async function getRacingCarsNameInputFunc() {
  const racingCarsName = await Console.readLineAsync('입력');
  return racingCarsName;
};

export default getRacingCarsNameInput;
