export const formatErrorMessage = (error) => `[ERROR] ${error}`;

export const getWinners = (cars) => {
    const maxScore = cars.reduce((max, car) => Math.max(max, car.moveScore), 0);

    let winners = [];
    cars.map((car) => {
        if (car.moveScore == maxScore) winners.push(car.name);
    });

    return winners.join(", ");
};
