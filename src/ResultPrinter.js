import { Console } from "@woowacourse/mission-utils";

class ResultPrinter {
  static printResults(carNames, roundResults) {
    const winners = this.findWinners(carNames, roundResults); // 우승자 찾기
    this.printWinners(winners); // 최종 결과 출력
    this.printRoundResults(carNames, roundResults); // 각 라운드 결과 출력
  }

  static printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }

  static printRoundResults(carNames, roundResults) {
    carNames.forEach((carName) => {
      const totalDistance = this.calculateTotalDistance(carName, roundResults); // 누적 거리 계산
      const result = this.generateResultString(totalDistance); // 결과 문자열 생성
      Console.print(`${carName} : ${result}`); // 라운드 결과 출력
    });
  }

  static calculateTotalDistance(carName, roundResults) {
    return roundResults.flat().filter((name) => name === carName).length;
  }

  static generateResultString(totalDistance) {
    return "-".repeat(totalDistance);
  }

  static findWinners(carNames, roundResults) {
    const distances = this.calculateDistances(carNames, roundResults); // 각 자동차의 총 이동 거리
    const maxDistance = Math.max(...distances); // 최대 거리 계산
    return this.getWinners(carNames, distances, maxDistance); // 우승자 반환
  }

  static calculateDistances(carNames, roundResults) {
    return carNames.map((carName) =>
      this.calculateTotalDistance(carName, roundResults)
    );
  }

  static getWinners(carNames, distances, maxDistance) {
    return carNames.filter(
      (carName, index) => distances[index] === maxDistance
    );
  }
}

export default ResultPrinter;
