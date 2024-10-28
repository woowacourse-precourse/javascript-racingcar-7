import { MissionUtils } from "@woowacourse/mission-utils";

const getString = async() =>{
    try{
        const inputValue = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
        return inputValue;
    }catch(error){
        throw new Error("[ERROR] 입력을 잘못하셨습니다. 어플리케이션이 종료됩니다. ");
    }

  
}

export default getString