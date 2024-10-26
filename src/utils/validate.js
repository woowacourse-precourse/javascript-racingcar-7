import { ERROR } from "../constants/error.js";

class Validate{
  inputExist(input){
    if(!input){
      throw new Error(ERROR.INPUT_BLANK_ERROR);
    }
  }

  nameLength(input){
    const cars = input.split(',');
    for (let car of cars){
      if(car.length>=6 || car.length < 1){
        throw new Error(ERROR.INPUT_STRING_SIZE_ERROR);
      }
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
  }

  countValidate(input){
    this.inputExist(input);
    this.countType(input);
    this.countSize(input);
  }

}

export default Validate