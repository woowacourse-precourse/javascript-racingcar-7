class RaceResult {
    findWinners(cars) {
        const maxDistance = Math.max(...cars.map(car => car.distance)); //가장 멀리 이동한 maxDistance를 구함
        const winnersArray = this.parsingWinnersArray(cars, maxDistance); // 이동거리가 maxDistance인 자동차 객체 배열에서 자동차 이름만 남김 
        const winners = winnersArray.join(", ");
        return winners;
    }
    parsingWinnersArray(cars, maxDistance) {
        const winnersArray = cars.filter(car => car.distance === maxDistance).map(car => car.name);
        return winnersArray;
    }
}

export default RaceResult;