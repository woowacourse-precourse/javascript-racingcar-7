export function checkValidCarInput(carListNames){
    if(carListNames.some(carName =>  carName.trim() === "")){
        throw new Error("[ERROR] 자동차 이름은 빈 문자열일 수 없습니다.");
    }
}
export function checkValidTimeInput(INPUTTIMES){
    if(isNaN(INPUTTIMES)){
        throw new Error("[ERROR] 횟수는 숫자 값으로 입력하세요.");
    }
    else if(INPUTTIMES <= 0){
        throw new Error("[ERROR] 횟수는 양의 정수값으로 입력하세요.");
    }
}