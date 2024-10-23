export function checkCarsName(inputArray) {
    if (inputArray.some(name => name.length == 0 | name.length > 5)) {
        throw new Error("[ERROR] 자동차 이름은 1자 이상, 5자 이하만 입력하세요");
    }
}