import { Random, Console } from "@woowacourse/mission-utils";

export function Driver(nameList, number) {
  let score = ArrObjConvertor(nameList);
}
function ArrObjConvertor(list) {
  let resultObj = {};
  list.forEach((element) => {
    resultObj[element] = 0;
  });
  return resultObj;
}
