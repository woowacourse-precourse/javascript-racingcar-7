class CheckNameInput{

    constructor(nameInput){
        this.nameInput = nameInput;
    };

    checkNameLength(){
        if (this.nameInput.length > 5) {
            throw new Error("[ERROR] : 이름은 5글자를 초과할 수 없습니다.");
        };
    };
    checkNameVoid(){
        if (!this.nameInput.trim()) {
            throw new Error("[ERROR] : 이름은 공백일 수 없습니다.");
        };
    };
};

export default CheckNameInput;