# javascript-racingcar-precourse

# 초간단 자동차 경주 게임 기능 순서

1.  자동차,시도횟수 형식에 입력받기 (4.)
2.  이름이 5자 이하인 자동차 구분하기 (3.)
3.  잘못된 값 입력시 ERROR 발생시키기 (8.)
4.  랜덤한 전진 조건 정해서 출력하기 (5. 1. 2.)
5.  시도횟수만큼 전진 조건에 맞게 출력하기 (2.)
6.  마지막 출력의 -을 비교하여 최대 값의 자동차 이름들 출력하기 (6. 7.)

# 초간단 자동차 경주 게임 문제 파악

1. 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.(5)

   -> 5.을 한 후 그 값에 따라 정해짐

2. 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다. (6)

   ->
   pobi : -
   woni :
   jun : -

   pobi : --
   woni : -
   jun : --

3. 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다. (3)

   -> pobi,woni,jun

4. 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.(1)

   ->
   경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)

   pobi,woni,jun

   시도할 횟수는 몇 회인가요?

   5

5. 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.(4)

   ->
   MissionUtils.Random.pickNumberInRange(0, 9);

6. 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.(7)

   -> 2.을 반복한후 마지막 경우를 보고 -의 갯수로 승자를 정함

7. 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.(8)

8. 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.(2)
   -> 마지막에 + 테스트하기

# 1차 테스트 아이디어

1. 입력과 오류 테스트
   - 이름 구분(,)
   - 잘못된 구분 문자(x)=> 이름에 문자가 있을 수있다고 생각
   - 시도 횟수 숫자 아닐 경우
2. 전진 조건 만족시 전진으로 받는지 테스트

   - 4이상일 경우
   - 4미만일 경우

3. 우승자 구분 가능 테스트
   - 1명일때
   - 여러명일때

# 2차 테스트 아이디어

1. 입력과 오류 테스트
   - ,뒤에 문자 없을 경우
   - 횟수 1이하일 경우
