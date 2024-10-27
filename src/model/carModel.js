import { MissionUtils } from "@woowacourse/mission-utils";

class CarModel {
  constructor() {
    this.carList = []; 
    this.count = 0;
    this.distance = new Map(); 
  }

  addCar(carName) {
    this.carList.push(carName);
    this.distance.set(carName, 0); // 자동차의 초기 거리를 0으로 설정
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
    // 해시맵에서 우승자를 추출 구현
    const winner = [];
    const allRecords = [];
    let maxRecord = 0;
    for (let [_, record] of this.distance){
      allRecords.push(record);
    }
    maxRecord = Math.max(...allRecords);
    for (let [carName, record] of this.distance){
      if(record === maxRecord){ // 문자열 비교 분석 필요
        winner.push(carName);
      }
    }
    return winner;
  }
}

export default CarModel;
