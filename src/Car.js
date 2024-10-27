import { Random } from "@woowacourse/mission-utils";

class Car{
    position = 0;

    constructor(name){
        this.validateName(name);
        this.name = name;
    }

    validateName(name){
        if(name.length > 5) {
            throw new Error("이름은 5자를 초과하면 안됩니다.");
        }
    }

    goAhead(){
        if(Random.pickNumberInRange(0, 9) >= 4) {
            this.position += 1;
        };
    }

    currentPosition(){
        return '-'.repeat(this.position)
    }
}

export default Car;