import printResultTitle from '../outputHandlers/printResultTitle';
import printRoundResults from '../outputHandlers/printRoundResults';
import getObjectValueLengths from '../utils/getObjectValueLengths';
import findWinnersCar from './findWinnersCar';
import getRandomValue from './getRandomValue'
import moveCarForward from './moveCarForward';


const updateCarPositions =(carObject)=>{
    const carKeys = Object.keys(carObject); 
    for(let j=0; j<carKeys.length; j++){
        const randomValue = getRandomValue();
        const isCarMovingForward = moveCarForward(randomValue);
        if(isCarMovingForward){
            carObject[carKeys[j]]+="-"
        }
    }
}


const carGame=(carObject,tryNumber)=>{
    printResultTitle()
    for(let i =0; i<tryNumber; i++){
        updateCarPositions(carObject);
        printRoundResults(carObject);
    }
    const carMoveLengths = getObjectValueLengths(carObject);
    const winnersCar = findWinnersCar(carObject,carMoveLengths);

    return winnersCar
}

export default carGame