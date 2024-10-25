import CarService from './CarService.js';
import OutputView from '../view/OutputView.js';

class GameServices {
  constructor() {
    this.carService = new CarService();
    this.outputView = new OutputView();
  }

  moveCar(carNameList, gameRound) {
    let carObj = this.carService.getCarList(carNameList);
    for (let round = 0; round < gameRound; round++) {
      this.carService.checkMovement(carObj);
      this.outputView.gameResult(carObj);
    }
    return carObj;
  }

  checkRanking(resultObj) {
    const sortedDistance = resultObj
      .map((result) => result.distance.length)
      .sort((a, b) => b - a);

    const distance = resultObj.map((result) => result.distance.length);

    const getRankingObj = resultObj.map((result, index) => {
      const rank = sortedDistance.indexOf(distance[index]) + 1;
      return { ...result, ranking: rank };
    });
    this.getWinner(getRankingObj);
  }

  getWinner(carObj) {
    let winner = [];
    carObj.map((car) => {
      if (car.ranking === 1) {
        winner.push(car.name);
      }
    });
    this.outputView.winningResult(winner);
  }
}

export default GameServices;
