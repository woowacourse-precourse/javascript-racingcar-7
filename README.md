# javascript-racingcar-precourse


## 1. 과제 진행 및 프로그래밍 요구사항
- AngularJS Git Commit Message 준수
- Airbnb JS 스타일 가이드 준수, 변수명 및 클래스명 영문, 상수명 SNAKE_CASE 사용
- nvm을 통한 Node.js 20.17.0 환경에서 개발 
- App.js의 run()의 프로그램 시작점
- 파일 및 패키지 수정 금지
- 프로그램 종료시 process.exit() 금지
- indent의 depth 3 미만(2까지만 허용, 필요시 메서드 분리)
- 3항 연산자 금지
- 함수가 한가지 일만 하도록 작게 만듦
- Jest를 사용하여 테스트 코드로 확인
- @woowacourse/mission-utils 의 [Random, Console] API 사용

    - MissionUtils.Random.pickNumberInRange() 을 사용해 랜덤한 정수 값 반환
        > `pickNumberInRange(startInclusive, endInclusive)`
        
        - 숫자 범위를 지정하면 시작 또는 끝 숫자를 포함하여 범위의 숫자를 반환한다.
        ```
        Random.pickNumberInRange(1, 10); // 1
        Random.pickNumberInRange(1, 10); // 10
        Random.pickNumberInRange(1, 10); // 4
        Random.pickNumberInRange(1, 10); // 5
        ```
    - MissionUtils.Console.readLineAsync()와 MissionUtils.Console.print() 를 사용하여 입출력 활용
        > `readLineAsync(query)`
        - 주어진 질문을 화면에 출력하고, 사용자가 입력한 답변을 Promise를 통해 반환한다.
        ```js
        async function getUsername() {
            try {
                const username = await Console.readLineAsync('닉네임을 입력해주세요.');
            } catch (error) {
        // reject 되는 경우
            }
        }
        ```
        > `print(message)`
        - 주어진 문자열을 콘솔에 출력한다.
        ```js
        Console.print('안녕하세요.');
        ```

## 2. 기능 요구사항
- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.

- 각 자동차에 이름을 부여할 수 있다. 
- 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.

- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.

- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.

- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.

- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.

- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.

- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 Error를 발생시킨 후 애플리케이션은 종료되어야 한다.

## 3. 입출력 요구 사항

#### 입력
- 경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)
    >pobi,woni,jun
- 시도할 횟수
    > 5

#### 출력
- 차수별 실행 결과
    >pobi : --
    >woni : ----
    >jun : ---
- 단독 우승자 안내 문구
    >최종 우승자 : pobi
- 공동 우승자 안내 문구
    >최종 우승자 : pobi, jun
- 실행 결과 예시
    ```
    경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)

    pobi,woni,jun

    시도할 횟수는 몇 회인가요?
    5

    실행 결과
    pobi : -
    woni : 
    jun : -

    pobi : --
    woni : -
    jun : --

    pobi : ---
    woni : --
    jun : ---

    pobi : ----
    woni : ---
    jun : ----

    pobi : -----
    woni : ----
    jun : -----

    최종 우승자 : pobi, jun
    ```

    <hr>
## 기능 구현
### 1-1. 자동차 이름 입력 및 검증
- 자동차 이름을 입력받고, 쉼표로 분리하여 배열로 만듦
- 각 이름의 길이가 1~5인지 검증.

### 1-2. 시도횟수 입력 및 검증
- 시도 횟수를 입력받음.(정수인지 확인)
- 1회 이상부터 가능하도록 검증

### 2. Car 클래스 구현
- 자동차는 이름과 현재 위치를 가지고 있어야 함.
    >name, position

- pickNumberInRange(0, 9)를 사용하여 랜덤 숫자를 생성, 4 이상일 경우 position 를 증가시킴

- 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력
    - 현재 위치를 '-' 문자열로 출력해야함.

### 3. 레이싱 진행
- 시도 횟수만큼 레이싱 진행
- 각 자동차 객체에 대해 move()를 명령
- 각 자동차 객체는 move() 이후 getPosition() 메서드로 이동을 반환

### 4. 우승자 선별
- 우승자는 1명 이상(중복 우승시 (,)로 구분)
- 가장 position이 높은 자동차 객체가 우승(중복가능)