import { MissionUtils } from "@woowacourse/mission-utils";
import validInput from "./validInput.js"

function splitInput(targetInput) {
  const CARNAMES = targetInput.split(",");
  try {
    const CARNAMES = targetInput.split(",");
    if (validInput(CARNAMES)) {
      return CARNAMES;
    } else {
      throw new Error("[ERROR] 올바른 입력 형식 ");
    }
  } catch {
    MissionUtils.Console.print("[ERROR] 올바른 입력 형식이 아닙니다.");
  }
}

export default splitInput;
