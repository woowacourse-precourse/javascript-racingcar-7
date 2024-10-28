import throwError from "../utils/throwError.js";

export function carNameArrayValidate(carNameArray) {
  const carNameSet = new Set(carNameArray);

  if (carNameSet.size !== carNameArray.length) {
    throwError("중복된 자동차 이름이 있습니다.");
  }

  carNameArray.forEach((name) => {
    if (!name.trim()) {
      throwError("자동차 이름은 공백으로 적을 수 없습니다.");
    }

    if (name.trim() !== name) {
      throwError("자동차 이름은 좌우 공백 없이 적어주세요.");
    }

    if (name.length > 5) {
      throwError("자동차 이름은 5자 이하로 지어주세요.");
    }
  });
}

export function countValidate(count) {
  const countNumber = Number(count);

  if (!count) {
    throwError("시도할 횟수를 입력해 주세요.");
  }

  if (Number.isNaN(countNumber)) {
    throwError("올바른 값을 입력해 주세요.");
  }

  if (!Number.isInteger(countNumber) || countNumber < 0) {
    throwError("횟수는 자연수로 입력해 주세요.");
  }
}
