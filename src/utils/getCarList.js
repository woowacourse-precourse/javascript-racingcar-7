import { Console } from "@woowacourse/mission-utils";

// 자동차 개수 겁증
const vaildCarList = (getCarListArray) => {
  if (getCarListArray.length < 2) {
    throw "자동차 경주를 위해서는 ,로 구분된 2대 이상의 자동차가 필요합니다.";
  }

  const seen = new Set();

  getCarListArray.forEach((carName) => {
    if (carName.length < 1) {
      throw "자동차 이름은 1글자 이상이어야 합니다.";
    }

    if (carName.length > 6) {
      throw "자동차 이름은 5글자를 넘을 수 없습니다.";
    }

    const trimmedCarName = carName.trim();

    if (seen.has(trimmedCarName)) {
      throw `자동차 이름은 중복될 수 없습니다: '${trimmedCarName}'`;
    }

    seen.add(trimmedCarName);
  });
};

const getCarList = async () => {
  const getCarList = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  );

  const getCarListArray = getCarList.split(",");

  try {
    vaildCarList(getCarListArray);
    return getCarListArray;
  } catch (error) {
    throw new Error("[ERROR]" + error);
  }
};

export default getCarList;
