# javascript-racingcar-precourse

## flow
1. 입력 받기
    - 경주에 참여할 자동차 명단
    - 경주 진행할 횟수
2. 경주 진행
    - 각 자동차 별 0 ~ 9 랜덤 숫자 지정
    - 4 이상인 자동차만 한 칸 전진
    - 입력받은 횟수만큼 반복
3. 결과 출력
    - 가장 멀리 간 자동차 선별
    - 우승자 출력

## MVC 패턴
Model
- [x] Car class
    - Property
        * name
        * distance
    - Method
        * move(): distance + 1
            
View
- [x] 사용자 입력 받는 함수
    - args: message
    - return: 사용자 입력
- [x] 각 경주 단계 진행 결과 출력하는 함수
    - args: 각 자동차 객체들
- [x] 우승자 출력하는 함수
    - args: 우승한 자동차 이름들

Controller
- [x] 경주 진행하는 컨트롤러 class
    - Property
        * carArray: 경주에 참여한 자동차 배열
    - Method
        - [x] runRaceStep(): race 1 단계 진행
        - [x] showRaceStep(): 진행한 race 단계의 결과 출력
        - [x] getMaxDistance(): 제일 멀리간 차의 거리 구하기
        - [x] getWinnerCar(): 우승한 자동차 구하기
        - [x] announceWinner(): 우승한 자동차 발표하기

Validate
공통
- [x] 빈 입력값 인 경우 Error -> input 받을 때 처리

실행 횟수
- [ ] 양의 정수가 아닌 경우 Error

경주에 참여하는 자동차 명단
- [ ] 자동차 이름이 5글자 초과인 경우 Error


Util
- [x] 0 ~ 9 Random 값 반환하는 함수
    - return: random 숫자 값

## 기능 요구 사항
초간단 자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.