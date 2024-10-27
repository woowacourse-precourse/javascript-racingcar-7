import { GIDE_MESSAGE } from "../../Constants/constant.js";
import printResultMessage from "./printResultMessage.js";

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
