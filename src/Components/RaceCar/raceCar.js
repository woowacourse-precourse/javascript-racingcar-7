import { Console } from "@woowacourse/mission-utils";
import { GIDE_MESSAGE } from "../../Constants/constant.js";
import randomGenerator from "../../Utils/randomGenerator.js";

const raceCar = (carList, tryNumber) => {
  const raceCarList = carList.map((car) => {
    return {
      name: car,
      position: 0,
    };
  });

  Console.print(GIDE_MESSAGE.result);

  for (let i = 0; i < tryNumber; i++) {
    raceCarList.forEach(() => {
      const randomNum = randomGenerator();
      console.log(randomNum);
    });
    Console.print("\n");
  }
};
export default raceCar;
