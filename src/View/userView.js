import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/message";

class UserView {
  async printProgress(carName, distance) {
    const printArray = [carName," : "];
    printArray.push('-'.repeat(distance));
    Console.print(printArray.join(''));
  }
  async printWinner(winnerList) {
    const printArray = [MESSAGE.WINNER];
    let count=1;
    for (let carName of winnerList){
      if(count === winnerList.length){
        printArray.push(carName);
      } else{
        printArray.push(carName);
        printArray.push(", ");
        count+=1;
      }
    }
    Console.print(printArray.join(''));
  }
}

export default UserView;