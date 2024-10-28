import { MissionUtils } from '@woowacourse/mission-utils';

import { OTHERS } from '../../constants/constants.js';

export const progressRacingCar = (cars) => {
  cars.forEach((car) => {
    const carInfo = `${car.name} : ${OTHERS.PROGRESS_BAR.repeat(car.go)}`;

    MissionUtils.Console.print(carInfo);
  });

  MissionUtils.Console.print(OTHERS.NEXT_LINE);
};
