import { Random } from '@woowacourse/mission-utils';
import { Console } from '@woowacourse/mission-utils';

class Race {

    raceCar(tryNumber, carList, positionList){
        Console.print("\n실행 결과");
        for(let i = 0; i < tryNumber; i++){
            this.getRaceResult(carList, positionList);
        }
    }

    getRaceResult(carList, positionList){
        carList.forEach((car, idx) => {
            if(this.moveForward()){
                positionList[idx] += 1;
            }

            const positionDisplay = '-'.repeat(positionList[idx]);
            Console.print(`${car} : ${positionDisplay}`);
        });
        Console.print('');
    }

    moveForward(){
        const randomNum = Random.pickNumberInRange(0, 9);
        return randomNum >= 4;
    }

    findWinner(carList, positionList){
        const maxPosition = this.getMaxPosition(positionList);
        return this.getWinner(carList, positionList, maxPosition);
    }

    getMaxPosition(positionList){
        return Math.max(...positionList);
    }

    getWinner(carList, positionList, maxPosition){
        return carList.filter((_, index) => positionList[index] === maxPosition);
    }
}

export default Race;