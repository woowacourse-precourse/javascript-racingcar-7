import RandomNum from "./RandomNumber";

const randomnumber = new RandomNum();

class Race{
  async race(car, trynumber,arr){
    for(i=0; i<trynumber;i++){
      await this.advance(car,arr);
    }
  }
  async advance(car,arr){
    for(j=0;j<car.length;j++){
      const number= await randomnumber.RNumber();
      arr[i] += getProgress(number);
    }
  }
  getProgress(number){
    if(number >= 4) return 1;
    return 0;
  }
}

export default Race;

