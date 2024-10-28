import { MissionUtils } from "@woowacourse/mission-utils";
function validInput (cars) {
  for(let i=0;i<cars.length;i++){
    if (cars[i].length>5) {
      // MissionUtils.Console.print(cars[i]);
      return false
    }
  }
  return true
};

export default validInput;