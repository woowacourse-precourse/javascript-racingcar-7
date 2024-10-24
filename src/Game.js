import { initRecord } from "./utils/initRecord.js";

export class Game {
  constructor(cars, count) {
    this.record = initRecord(cars);
    this.count = count;
  }
  update(movingCars){
    movingCars.map((car) => {
      this.record[car] += 1;
    })
  }
}
