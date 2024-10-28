class Vaildator {
    checkCarName(carsInput) {
        if (carsInput == '') throw new Error("[ERROR] 자동차 입력 에러");
    }

    checkCarCount(carsObj) {
        for (let car in carsObj) {
            if (car.length > 5) throw new Error("[ERROR] 자동차 입력 에러(이름 길이)");
        }
        if (Object.keys(carsObj).length <= 1) throw new Error("[ERROR] 자동차 입력 에러(갯수, 구분자)");
    }

    checkTryInput(tryInput) {
        if (tryInput == '' || isNaN(tryInput) || tryInput <= 0) throw new Error("[ERROR] 횟수 입력 에러");
    }


}

export default Vaildator;