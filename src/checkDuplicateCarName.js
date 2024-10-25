const checkDuplicateCarName = (carNameList) => {
  const set = new Set(carNameList);
  if (carNameList.length !== set.size) {
    throw new Error("[ERROR] 차 이름이 중복되었습니다.");
  }
}

export default checkDuplicateCarName;