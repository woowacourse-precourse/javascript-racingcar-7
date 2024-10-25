import { Console } from '@woowacourse/mission-utils';

const ONE_STEP = '-';

export const printDistance = (car) => {
  Console.print(car.name + ' : ' + ONE_STEP.repeat(car.distance));
};

