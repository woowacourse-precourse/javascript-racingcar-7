import { Console } from '@woowacourse/mission-utils';

const ONE_STEP = '-';

export const printCarDistance = (car) => {
  Console.print(car.name + ' : ' + ONE_STEP.repeat(car.distance));
};
