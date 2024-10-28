import printRoundResults from '../outputHandlers/printRoundResults';
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
    for(let i =0; i<tryNumber; i++){
        updateCarPositions(carObject);
        printRoundResults(carObject);
    } 
}

export default carGame