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
function inputAttempt(){
  const INPUT_ATTEMPT = Console.readLineAsync('시도 할 횟수 : ')
  return INPUT_ATTEMPT
}

function isErrorAttempt(input){
  const ATTEMPT_COUNT = parseInt(input)
  if(isNaN(ATTEMPT_COUNT)){
    throw Error('[ERROR] 시도할 횟수는 숫자만 입력 가능합니다.')
  }
  else{
    return false
  }
}

function initCarObject(arr){
  var obj = {}
  arr.forEach(element => {
    obj[element] = 0
  });
  return obj;
}
function goForward(val){
  var randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);
  if(randomNumber >= 4){
    return val+1;
  }
  else{
    return val;
  }
}
function processTurn(obj){
  Object.keys(obj).forEach(key=> {
    obj[key] = goForward(obj[key])
  })
  return obj
}


function printResult(obj){
  Object.keys(obj).forEach(key=>{
    var dashCount = '-'.repeat(obj[key])
    Console.print(`${key} : ${dashCount}`)
  })
}

function processRacing (obj, attempt){
  for(var count = 0 ; count < attempt ; count++){
    obj = processTurn(obj)
    printResult(obj)
    Console.print('')
  }
  return obj
}

function getWinner (obj){
  var winners = []
  var highest = Math.max(...Object.values(obj))
  winners = Object.keys(obj).filter(key => obj[key] === highest)
  return winners
}

function printWinner(arr){
  Console.print(`최종 우승자 : ${arr.join(', ')}`)
}

class App {

  async run() {
    //1. 차 이름 입력
    const INPUT_NAME = await inputNames()
    const CAR_ARRAY = splitNames(INPUT_NAME)
    const ISERROR_NAME = isErrorNames(CAR_ARRAY)

    //2. 시도 횟수 입력
    const INPUT_ATTEMPT = await inputAttempt()
    const ISERROR_ATTEMPT = isErrorAttempt(INPUT_ATTEMPT)

    //3.경주
    var carObject = initCarObject(CAR_ARRAY)
    carObject = processRacing(carObject,INPUT_ATTEMPT)

    //4.우승자 판별
    const WINNER_ARRAY = getWinner(carObject)
    printWinner(WINNER_ARRAY)

  }
}

export default App;
