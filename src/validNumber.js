import { MissionUtils } from "@woowacourse/mission-utils";

function validNumber(num) {
  const parsedNum = parseInt(num);

  if (isNaN(parsedNum) || parsedNum <= 0) {
    MissionUtils.Console.print("[ERROR] 양수를 입력해주세요.");
  }

  return parsedNum;
}

export default validNumber;

