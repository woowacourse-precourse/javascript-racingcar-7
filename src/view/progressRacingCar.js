import { MissionUtils } from '@woowacourse/mission-utils';

export const progressRacingCar = async (cars) => {
  cars.forEach((car) => {
    const carInfo = `${car.name}: ${'-'.repeat(car.go)}`;

    MissionUtils.Console.print(carInfo);
  });

  MissionUtils.Console.print('');
};
