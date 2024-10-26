import { MissionUtils } from "@woowacourse/mission-utils";

const printWinner = (topCars) => {
  MissionUtils.Console.print(`최종 우승자 : ${topCars.join(",")}`);
};

export default printWinner;
