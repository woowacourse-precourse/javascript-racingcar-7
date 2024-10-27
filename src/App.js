import {Console, MissionUtils} from "@woowacourse/mission-utils"

class App{
  async run(){
    // 1. 자동차 입력 : 자동차 입력 받기
    const car_input=await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    Console.print(car_input)
    // 1. 변수 할당 : 각 자동차의 게임 진행 상황 반영 리스트
    let car_names=[]
    let game_result=[]

    // 2. 게임을 몇 번 할건지 입력 받기(이후 라운드라고 표현)
    const number_input=await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    // 3. 랜덤 정수 변수 할당
    let random_numbers=[];

    // 1. 자동차 입력 : 입력받은 데이터를 쉼표(,)로 구분하여 리스트 요소로 저장
    if(car_input.includes(",")){
      car_names=car_input.split(",");
    }

    // 3. 게임에서 사용할 랜덤한 정수 함수 선언
    function random_number(){
      return MissionUtils.Random.pickNumberInRange(0,9);
    }
  }
}