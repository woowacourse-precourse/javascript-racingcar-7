import {Console, MissionUtils} from "@woowacourse/mission-utils"

class App{
  async run(){
    // 1. 자동차 입력 : 자동차 입력 받기
    const car_input=await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    // 1. 변수 할당 : 각 자동차의 게임 진행 상황 반영 리스트
    let car_names=[];
    let game_results=[];

    // 2. 게임을 몇 번 할건지 입력 받기(이후 라운드라고 표현)
    const number_input=await Console.readLineAsync('시도할 횟수는 몇 회인가요?');
    // 3. 랜덤 정수 변수 할당
    let random_numbers=[];

    // 1. 자동차 입력 : 입력받은 데이터를 쉼표(,)로 구분하여 리스트 요소로 저장
    if(car_input.includes(",")){
      car_names=car_input.split(",");
    // 5. 1-예외 : 자동차 이름 글자수 예외 처리 함수 실행
      car_name_length(car_names);
    // 6. 1-예외 : 자동차 입력 예외 상황 "[ERROR]" 메세지 설정
    }else{
      throw new Error("[ERROR]")
    }

    // 5. 예외 처리 1 : 모든 자동차 이름 검사 함수
    function car_name_length(cars){
      for (const car of cars){
        check_car_name_length(car);
      }
    }
    // 5. 예외 처리 1 : 이름 글자수 검사 함수(5자 이하만 가능)
    function check_car_name_length(name){
      if(name.length>5){
        throw new Error("[ERROR]");
      }
    }

    // 3. 게임에서 사용할 랜덤한 정수 함수 선언
    function random_number(){
      return MissionUtils.Random.pickNumberInRange(0,9);
    }

    // 4. 게임 함수 선언
    function game(rounds){
	    for (let i=0; i<rounds; i++){
		    random_numbers=car_names.map(()=>random_number());
		    update_round_result(random_numbers);
		    print_round_result();
		    Console.print("\n");
	    }
    }
    
    // 4. 각 라운드별 결과 업데이트 함수
    function update_round_result(random_numbers){
	    random_numbers.forEach((number,index)=>{
		    if(game_results[index]===undefined){
			    game_results[index]=0;
		    }
		    if(number>=4){
			    game_results[index]+=1;
		    }
	    });
    }
    
    // 4. 각 라운드 별 결과 프린트 함수
    function print_round_result(){
	    car_names.forEach((name,index)=>{
		    let round_result=""
		    if(game_results[index]!==undefined){
			    round_result="-".repeat(game_results[index]);
		    }
		    Console.print(`${name} : ${round_result}`)
	    })
    }

    Console.print("\n");

    // 7. 게임 함수 실행 및 게임 최종 결과 출력
    Console.print("실행 결과");
    game(Number(number_input));
    const max_score=Math.max(...game_results);
    const winners=[];
    game_results.forEach((score,index)=>{
      if(score===max_score){
        winners.push(car_names[index]);
      }
    });
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}

export default App;