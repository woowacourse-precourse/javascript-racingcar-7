class DetermineWinnerService {
  determineWinners(cars) {
    const maxDistance = Math.max(...cars.map(car => car.getForwardCount()));

    const winners = cars
      .filter(car => car.getForwardCount() === maxDistance)
      .map(car => car.getName());

    return winners;
  }
}

export default DetermineWinnerService;
