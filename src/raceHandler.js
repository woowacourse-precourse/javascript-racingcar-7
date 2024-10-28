import { Console } from "@woowacourse/mission-utils";
import { IO_MESSAGE } from "./constants/message.js";
import actionDecision from "./utils/actionDecision.js";

function raceHandler(vehicleNames, attemptCount) {
  if (!Array.isArray(vehicleNames) || vehicleNames.length === 0) {
    throw new Error("Invalid vehicle names array");
  }

  let vehiclePositions = new Map(vehicleNames.map((name) => [name, 0]));
  let raceRound = 0;

  Console.print(`\n${IO_MESSAGE.OUTPUT_RESULT}`);
  while (raceRound !== attemptCount) {
    vehicleNames.forEach((vehicle) => {
      const actionResult = actionDecision();
      if (vehiclePositions.has(vehicle)) {
        const currentDistance = vehiclePositions.get(vehicle);
        const newDistance = currentDistance + actionResult;
        vehiclePositions.set(vehicle, newDistance);
        const progress = "-".repeat(newDistance);
        Console.print(`${vehicle} : ${progress}`);
      }
    });

    Console.print("");
    raceRound++;
  }

  const maxDistance = Math.max(...vehiclePositions.values());
  const winners = [...vehiclePositions.entries()]
    .filter(([_, distance]) => distance === maxDistance)
    .map(([vehicle]) => vehicle);

  return winners;
}
export default raceHandler;
