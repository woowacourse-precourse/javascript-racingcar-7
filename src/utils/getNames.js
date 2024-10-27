import { Console } from "@woowacourse/mission-utils";

export async function getNames() {
  let nameArray = [];

  try {
    let input = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
    );
    nameArray = input.split(",").map((name) => name.trim());

    for (const name of nameArray) {
      if (name.length > 5) {
        throw new Error("[ERROR] 이름은 5자 이하이어야 합니다.");
      }
    }

    return nameArray; // 이름 배열을 반환
  } catch (error) {
    throw new Error("[ERROR]");
  }
}
