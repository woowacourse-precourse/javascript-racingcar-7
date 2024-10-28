import { printRacing } from "../result/printRacing.js";
import { printWinner } from "../result/printWinner.js";
import { updateCarDistance } from "./updateCarDistance.js";

export function startRacing({ round, carNames, carDistances }) {
  for (let i = 0; i < round; i++) {
    carDistances = updateCarDistance(carDistances);
    printRacing(carNames, carDistances);
  }
  printWinner(carDistances, carNames);
}
