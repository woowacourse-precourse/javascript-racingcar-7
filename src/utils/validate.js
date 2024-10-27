import { ERROR } from "../constants/error.js";

class Validate{
  inputExist(input){
    if(!input){
      throw new Error(ERROR.INPUT_BLANK_ERROR);
    }
  }

  nameLength(input){
    const cars = input.split(',').map(car => car.trim());
    for (let car of cars){
      if(car.length>5 || car.length < 1){
        throw new Error(ERROR.INPUT_STRING_SIZE_ERROR);
      }
    }
  }
  minimumNumber(input) {
    const carList = input.split(',');
    if(carList.length === 1){
      throw new Error("[ERROR] 최소 두 개 이상의 차를 입력하세요");
    }
  }
  hasDuplicateName(input) {
    const noSpaces = input.split(' ').join('');
    const carList = noSpaces.split(',');
    const cars = new Set();
    for (const carName of carList){
      if(cars.has(carName)) {
        throw new Error("[ERROR] 이름은 중복되지 않고 공백 없이 입력하세요");
      }
      cars.add(carName);
    }
  }
  countType(input){
    if(isNaN(Number(input))){
      throw new Error(ERROR.INPUT_TYPE_ERROR);
    }
  }
  countSize(input){
    if(Number(input)<1){
      throw new Error(ERROR.INPUT_NUMBER_ERROR);
    }
  }

  carValidate(input){
    this.inputExist(input);
    this.nameLength(input);
    this.minimumNumber(input);
    this.hasDuplicateName(input);
  }

  countValidate(input){
    this.inputExist(input);
    this.countType(input);
    this.countSize(input);
  }

}

export default Validate