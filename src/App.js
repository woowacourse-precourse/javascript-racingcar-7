import {Console, MissionUtils} from '@woowacourse/mission-utils'

function inputNames(){
  const INPUT_NAME = Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n")
  return INPUT_NAME
}

function splitNames(input){
  const CAR_ARRAY = String(input).split(',')
  return CAR_ARRAY
}

function isLessFive (str,errorCount) {
  if(String(str).length <= 5){
    return errorCount
  }
  else{
    return errorCount+1;
  }
}
function isErrorNames(arr){
  var errorCount = 0
  arr.forEach(element => {
    errorCount = isLessFive(element,errorCount)
  });
  if(errorCount === 0){
    return false
  }
  else{
    throw Error('[ERROR] 자동차 이름은 다섯 자 이하만 입력 가능합니다.')
  }
  
}

class App {

  async run() {
    //1. 차 이름 입력
    const INPUT_NAME = await inputNames()
    const CAR_ARRAY = splitNames(INPUT_NAME)
    const ISERROR_NAME = isErrorNames(CAR_ARRAY)



    Console.print([...CAR_ARRAY])
    Console.print(INPUT_ATTEMPT)

    
    
  }
}

export default App;
