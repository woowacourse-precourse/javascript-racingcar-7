import { GIDE_MESSAGE } from "../../Constants/constant.js";
import printResultMessage from "./printResultMessage.js";

/**
 *
 * @param {{ name: string, position: number }} winnerCars - 우승한 자동차 리스트
 * @summary 우승한 자동차 리스트를 받아서 우승 메시지를 출력한다.
 */
const printWinner = (winnerCars) => {
  let resultMessage = `${GIDE_MESSAGE.winner} `;
  const carNames = winnerCars.map((car) => car.name);

  if (carNames.length > 1) {
    resultMessage +=
      carNames.slice(0, -1).join(", ") + `, ${carNames[carNames.length - 1]}`;
  } else if (carNames.length === 1) {
    resultMessage += carNames[0];
  }

  printResultMessage(resultMessage);
};
export default printWinner;
