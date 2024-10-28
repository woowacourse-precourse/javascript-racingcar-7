import {Console, MissionUtils} from '@woowacourse/mission-utils'

function inputNames(){
  const names = Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n")
  return names
}

function splitNames(input){
  const carArray = String(input).split(',')
  return carArray
}

function isLessFive (str,errorCount) {
  if(String(str).length <= 5){
    return errorCount
  }
  else{
    return errorCount+1;
  }
}
function detectNameError(arr){
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
  const attempts = Console.readLineAsync('시도 할 횟수 : ')
  return attempts
}

function detectAttemptError(input){
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
    const names = await inputNames()
    const carArray = splitNames(names)
    const isErrorNames = detectNameError(carArray)

    //2. 시도 횟수 입력
    const attempts = await inputAttempt()
    const isErrorAttempt = detectAttemptError(attempts)

    //3.경주
    var carObject = initCarObject(carArray)
    carObject = processRacing(carObject,attempts)

    //4.우승자 판별
    const winnerArray = getWinner(carObject)
    printWinner(winnerArray)

  }
}

export default App;
