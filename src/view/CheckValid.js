class CheckValid {
  carNameException(carArr) {
    carArr.forEach((car) => {
      if (car.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    });
  }
}

export default CheckValid;
