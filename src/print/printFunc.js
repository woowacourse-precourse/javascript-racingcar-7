import { Console } from "@woowacourse/mission-utils";

const PrintFunc = {
  printError(msg) {
    Console.print('[ERROR]' + msg);
    throw new Error("[ERROR]");
  },

  printParams(paramStr) {
    Console.print(paramStr);
  },

  printRacing(carName, racingDistances) {
    Console.print(`${carName} : ${racingDistances}`);
  },

  printResult(str) {
    Console.print('최종 우승자 : ' + str);
  },
}

export default PrintFunc