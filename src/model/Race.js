import RandomNum from "./RandomNumber.js";

const randomnumber = new RandomNum();

class Race {
  async race(car, arr) {
    const promises=car.map(async (_,j)=>{
      const number = await randomnumber.RNumber();
      arr[j] += number;
    });
    await Promise.all(promises);
    return arr;
  }
}


export default Race;

