// 우승자
class Winners {
  constructor(finalCarList) {
    this.carList = finalCarList.getCars(); // 최종 자동차 배열 정보
    this.winnersName = []; // 우승자 이름 배열
  }

  decideWinners() {
    const maxDistance = this.findMaxDistance();

    const winners = this.findWinners(maxDistance); // 최대 거리를 가진 자동차들 찾기

    this.winnersName = this.extractCarsName(winners); // 우승 자동차 이름만 추출

    return this.winnersName;
  }

  findMaxDistance() {
    return Math.max(...this.extractCarsDistance(this.carList));
  }

  findWinners(maxDistance) {
    return this.carList.filter((car) => car.getDistance() === maxDistance);
  }

  extractCarsDistance(carList) {
    return carList.map((car) => car.getDistance());
  }

  extractCarsName(carList) {
    return carList.map((car) => car.name);
  }
}

export default Winners;
