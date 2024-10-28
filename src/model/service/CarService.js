import { Random } from "@woowacourse/mission-utils";

export class CarService {
  move(carDto) {
    if (Random.pickNumberInRange(0, 9) >= 4) {
      carDto.setDistance(carDto.getDistance() + 1);
    }
    return carDto;
  }
}
