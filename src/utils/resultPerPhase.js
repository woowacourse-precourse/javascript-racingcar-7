import { Random, Console } from "@woowacourse/mission-utils";
const resultPerPhase = async (carNameAndDistance) => {
  const random = Random.pickNumberInRange(0, 9);
  if (random >= 4) {
    carNameAndDistance.forward++;
  }
  Console.print(
    `${carNameAndDistance.name} : ${"-".repeat(carNameAndDistance.forward)}`
  );
};
export default resultPerPhase;
