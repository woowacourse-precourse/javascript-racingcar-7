import { initRecord } from './utils/initRecord.js';

export class Record {
  constructor(carString) {
    this.table = initRecord(carString);
  }

  update(movingCars) {
    movingCars.forEach((car) => {
      this.table[car] += 1;
    });
  }
}
