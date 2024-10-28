import { Random } from "@woowacourse/mission-utils";

const raceRound = (car) => {
  const randomResult = Random.pickNumberInRange(0, 9);
  if (randomResult >= 4) {
    car.addAdvance();
  }
};

export default raceRound;
