import { MissionUtils } from "@woowacourse/mission-utils";

const printWinner = (topCars) => {
  const carNames = topCars.map((car) => car.name);
  MissionUtils.Console.print(`최종 우승자 : ${carNames.join(", ")}`);
};

export default printWinner;
