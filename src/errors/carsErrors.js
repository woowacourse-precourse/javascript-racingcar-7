const REGX_NUM = /^\d+$/;

export const checkNameLength = (names) => {
  names.map((name) => {
    if (name.length > 5)
      throw new Error("[ERROR] : 이름은 5자를 초과할 수 없습니다.");
  });
};

export const checkDuplicateNames = (names) => {
  const nameSet = new Set(names);
  if (nameSet.size !== names.length) {
    throw new Error("[ERROR] : 이름을 중복하여 사용할 수 없습니다.");
  }
};

export const checkRaceCount = (raceCount) => {
  if (!REGX_NUM.test(raceCount)) {
    throw new Error("[ERROR] : 유효하지 않은 횟수입니다.");
  }
};
