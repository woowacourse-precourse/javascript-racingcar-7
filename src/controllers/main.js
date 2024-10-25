import { Console } from "@woowacourse/mission-utils";

const main = async () => {
  Console.print("프로그램이 실행되었습니다.");

  const isCarName = await Console.readLineAsync("경주할 차 이름 입력");
  const isTryNumber = await Console.readLineAsync("시도할 횟수 입력");

  Console.print(`${isCarName}, ${isTryNumber}`);
};

export default main;
