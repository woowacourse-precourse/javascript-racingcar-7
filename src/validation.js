export function chkCarName(cars) {
    let message = null;
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].length > 5) {
            message = '자동차 이름이 5글자를 초과';
        } else if (cars[i] === '') {
            message = '빈 문자열이 자동차 이름으로 설정 되어 있음';
        }
        if (message) return message;
    }
    return false;
}

export function chkTryNum(num) {
    return num > 0;
}
