import {Console} from "@woowacourse/mission-utils";

export default async function getCars() {
  const input = await Console.readLineAsync("자동차 참가자를 입력하세요.\n");
  
  const cars = input.split(",");
  cars.forEach(checkCarName);
  return cars;
}
function checkCarName(carName) {
  if (carName.length > 5) {
    throw new Error("[ERROR] 자동차 이름은 5글자를 넘을 수 없습니다.");
  }
  if (carName === "") {
    throw new Error("[ERROR] 공백이름은 사용할 수 없습니다.");
  }
}
