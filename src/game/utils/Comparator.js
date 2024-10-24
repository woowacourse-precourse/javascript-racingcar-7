export default class Comparator {
  static checkAtLeastFour(num) {
    return num >= 4;
  }

  static selectFurthestCars(carList) {
    let winners = [];
    let maxDistance = 0;

    carList.forEach((car) => {
      const distance = car.getDistance();
      const name = car.getName();

      if (distance > maxDistance) {
        winners = [name];
        maxDistance = distance;
      } else if (distance === maxDistance) {
        winners.push(name);
      }
    });

    return winners;
  }
}
