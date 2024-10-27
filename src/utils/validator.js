// 입력값이 공백인지 확인
export const validateEmpty = (input) => {
  if (!input.trim()) {
    throw new Error("[ERROR] 자동차 이름을 입력해주세요.");
  }
}

// 입력한 자동차 이름이 2대 이상인지 확인
export const validateCarCount = (carList) => {
  if (carList.length < 2) {
    throw new Error("[ERROR] 경주에 참가할 자동차는 2대 이상이어야 합니다.");
  }
}

// 중복된 자동차 이름이 있는지 확인
export const validateDuplicate = (carList) => {
  const uniqueNames = new Set(carList);
  if (uniqueNames.size !== carList.length) {
    throw new Error("[ERROR] 중복된 자동차 이름이 있습니다.");
  }
}

// 자동차 이름의 길이가 5자 이하인지 확인
export const validateCarNameLength = (car) => {
  if (!car) {
    throw new Error("[ERROR] 자동차 이름은 1자 이상이어야 합니다.");
  }
  if (car.length > 5) {
    throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
  }
}