const findWinnerCar = (distances, cars) => {
    const maxDistance = Math.max(...distances); // 가장 긴 거리 찾기
    const winnerCar = distances.reduce((acc, value, index) => {
        if (value === maxDistance) {
            acc.push(cars[index]);
        }
        return acc;
    }, []);

    return winnerCar;
};

export default findWinnerCar;