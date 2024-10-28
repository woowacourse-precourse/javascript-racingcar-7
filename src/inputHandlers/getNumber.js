import { MissionUtils } from "@woowacourse/mission-utils";

const getNumber = async() =>{
    try{
        const inputValue = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?");
        return inputValue;
    }catch(error){
        throw new Error("[ERROR] 입력을 잘못하셨습니다. 어플리케이션이 종료됩니다. ");
    }

  
}

export default getNumber