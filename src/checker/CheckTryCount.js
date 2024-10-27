class CheckTryCount{

    constructor(tryCount){
        this.tryCount = tryCount;
    };

    checkDecimal() {
        const changeFloat = parseFloat(this.tryCount);
        if (!Number.isInteger(changeFloat)) {
            throw new Error("[Error] : 소수점은 입력할 수 없습니다.");
        };
    };

    checkNegative() {
        if (this.tryCount < 0) {
            throw new Error("[Error] : 음수는 입력할 수 없습니다.");
        };
    };

    checkTryCountNotNumber() {
        if (isNaN(Number(this.tryCount))) {
            throw new Error("[Error] : 횟수에는 숫자만 입력해주세요.");
        };
    };

    checkOverHundred(){
        if(this.tryCount > 100){
            throw new Error("[Error] : 100 이하의 숫자만 입력하세요");
        };
    };

    checkTryCountVoid(){
        if(!this.tryCount.trim()){
            throw new Error("[Error] : 횟수는 공백일 수 없습니다.");
        };
    };
};

export default CheckTryCount;