import { Console } from "@woowacourse/mission-utils";

export const formatErrorMessage = (error) => `[ERROR] ${error}`;

export const runRace = (cars, inputRound) => {
    for (let i = 0; i < inputRound; i++) {
        cars.map((car) => car.move());
        Console.print("\n");
    }
};

export const getWinners = (cars) => {
    const maxScore = cars.reduce((max, car) => Math.max(max, car.moveScore), 0);

    let winners = [];
    cars.map((car) => {
        if (car.moveScore == maxScore) winners.push(car.name);
    });

    return winners.join(", ");
};
