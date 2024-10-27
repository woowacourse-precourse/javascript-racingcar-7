import { MissionUtils } from "@woowacourse/mission-utils";

class CarModel {
  constructor() {
    this.carList = []; 
    this.count = 0;
    this.distance = new Map(); 
  }

  addCar(carName) {
    this.carList.push(carName);
    this.distance.set(carName, 0);
  }

  setCount(count) {
    this.count = count;
  }

  moveCars() {
    this.carList.forEach(car => {
      const speed = MissionUtils.Random.pickNumberInRange(0, 9);
      if (speed >= 4) {
        const currentDistance = this.distance.get(car) || 0; 
        this.distance.set(car, currentDistance + 1);
      }
    });
  }
  getWinner() {
    const winner = [];
    const allRecords = [];
    let maxRecord = 0;
    for (let [_, record] of this.distance){
      allRecords.push(record);
    }
    maxRecord = Math.max(...allRecords);
    for (let [carName, record] of this.distance){
      if(record === maxRecord){
        winner.push(carName);
      }
    }
    return winner;
  }
}

export default CarModel;
