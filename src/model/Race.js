import RandomNum from "./RandomNumber.js";

const randomnumber = new RandomNum();

class Race {
  async race(car, arr, trynumber) {
    for (let i = 0; i < trynumber; i++) {
      await this.advance(car, arr);
    }
  }
  async advance(car, arr) {
    for (let j = 0; j < car.length; j++) {
      const number = await randomnumber.RNumber();
      arr[j] += number;
    }
    return arr;
  }
}


export default Race;

