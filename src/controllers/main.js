import { Console } from "@woowacourse/mission-utils";

const Main = async () => {
  Console.print("프로그램이 실행되었습니다.");

  const isCarName = await Console.readLineAsync("경주할 차 이름 입력");
  const isTryNumber = await Console.readLineAsync("시도할 횟수 입력");

  // 검증 - 공백
  if (isCarName.trim().length === 0 || isTryNumber.trim().length === 0) {
    throw new Error("[ERROR] 입력값이 비었습니다.");
  }

  if (isCarName === null || isTryNumber === null) {
    throw new Error("[ERROR] 입력값이 비었습니다.");
  }

  // isTryNumber가 숫자로 변환되면서 정수인지 검사
  if (Number.isInteger(isTryNumber) === isNaN) {
    throw new Error("[ERROR] 정수만 입력해주세요.");
  }

  const parseNumber = Number(isTryNumber);

  // isTryNumber가 100번 이하인지
  if (parseNumber > 100) {
    throw new Error("[ERROR] 시도할 횟수는 100번 이하여야합니다.");
  }

  Console.print(`${isCarName}, ${isTryNumber}`);
};

export default Main;
