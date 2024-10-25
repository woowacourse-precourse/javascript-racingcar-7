import canMoveForward from "./canMoveForward.js";
import { displayEndOfStart, displayStatus } from "./displayResult.js";
import pickRandomNumber from "./pickRandomNumber.js";

export default function playRace(cars, playTime) {
    displayEndOfStart();
    while (playTime > 0) {
        playRound(cars);
        displayStatus(cars);
        playTime--;
    }
    return determineWinners(cars);
}

function playRound(cars) {
    cars.forEach((car) => {
        const randomNumber = pickRandomNumber()
        const canMove = canMoveForward(randomNumber);
        if (canMove) {
            car.move();
        }
    });
}

function determineWinners(cars) {
    const maxMoved = Math.max(...cars.map(car => car.getMoved()));

    const winners = cars
        .filter(car => car.getMoved() === maxMoved)
        .map(car => car.getName());
    return winners
}

