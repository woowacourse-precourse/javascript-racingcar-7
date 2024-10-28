import resultPerPhase from "./resultPerPhase.js";
import winnerDecision from "./winnerDecision.js";
import winnerName from "./winnerName.js";

const racingSituation = (carNames, totalTries) => {
  try {
    const carNameAndDistance = carNames.map((name) => ({ name, forward: 0 }));

    for (let i = 0; i < totalTries; i++) {
      carNameAndDistance.forEach((car) => {
        resultPerPhase(car);
      });
    }
    const winnerArr = winnerDecision(carNameAndDistance);
    const champion = winnerName(winnerArr);
    return champion;
  } catch (error) {
    throw error;
  }
};

export default racingSituation;
