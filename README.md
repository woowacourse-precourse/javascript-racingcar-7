# 구현 기능 목록

## 1. 입력 대기
- `CarRacingInputReader.js`
  - `getCarNames()`
    - 자동차 입력 대기 문구를 출력.
    
    ```jsx
    경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)
    ```

    - 사용자가 자동차 이름을 입력.

    ```jsx
    pobi, woni, jun;
    ```

  - `getTotalRounds()`
    - 시도 횟수 입력 대기 문구를 출력.
    ```jsx
    시도할 횟수는 몇 회인가요?
    ```
    - 시도 횟수를 입력.
    ```jsx
    5;
    ```

## 2. 입력 검증
- `CarRacingInputValidator.js`
  - `validateNotEmpty(input)`
    - 입력된 값이 빈 문자열인지 검증.
    - 빈 값이 입력된 경우 `[ERROR] 값을 제대로 입력해주세요.` 에러 메시지 출력.
  
  - `validateCarNames(input)`
    - 자동차 이름 목록을 쉼표로 구분하여 각 이름에 대한 검증을 수행.
    - 다음 검증들을 순차적으로 진행:
    
      - `validateEmptyCarNames(carNames)`
        - 각 자동차 이름이 빈 문자열인지 검증.
        - 빈 문자열이 있으면 `[ERROR] 빈 이름이 포함되어 있습니다.` 에러 메시지 출력.
      
      - `validateCarNameLength(carNames)`
        - 각 자동차 이름이 5글자 이하인지 검증.
        - 5글자를 초과하는 이름이 있으면 `[ERROR] 자동차 이름은 5글자 이하로 입력해주세요.` 에러 메시지 출력.
      
      - `validateUniqueCarNames(carNames)`
        - 중복된 이름이 없는지 검증.
        - 중복된 이름이 있을 경우 `[ERROR] 중복된 자동차 이름이 있습니다.` 에러 메시지 출력.
  
  - `validateTotalRounds(input)`
    - 시도 횟수 입력 값에 대해 다음 검증들을 수행:
    
      - `validateIsNumber(input)`
        - 입력값이 숫자인지 검증.
        - 숫자가 아닐 경우 `[ERROR] 유효한 숫자를 입력해주세요.` 에러 메시지 출력.
      
      - `validatePositiveRounds(input)`
        - 입력된 시도 횟수가 1 이상인지 검증.
        - 1 미만일 경우 `[ERROR] 시도 횟수는 1 이상이어야 합니다.` 에러 메시지 출력.

## 3. 자동차 경기 진행
- `Car.js`
  - `constructor()`
    - 자동차 이름과 이동 거리를 저장.

  - `attempMove()`
    - 랜덤 숫자에 따라 전진 유무를 결정.
    - 0, 1, 2, 3 : 이동 없음
    - 4, 5, 6, 7, 8, 9 : 1칸 전진

- `CarRacingGame.js`
  - `constructor()`
    - 입력받은 자동차 리스트로 자동차별 `Car` 인스턴스를 담은 인스턴스 배열을 속성으로 생성.

  - `startGame(totalRounds)`
    - 입력받은 라운드 수 만큼 경주를 진행.

  - `playRound()`
    - 각 라운드의 경주를 진행.

  - `determineWinners()`
    - 최종 라운드 종료시 우승자를 판정하여 반환.

## 4. 출력
- `CarRacingOutputWriter.js`
  - `printStartMessage()`
    - 게임 시작 시 실행 결과 메시지를 출력.
    ```jsx
    실행 결과
    ```

  - `printRoundResults(cars)`
    - 매 라운드 종료 시 각 자동차의 진행 상황을 출력.
    - 각 자동차 이름과 전진 상황을 `-` 로 출력.
    
    ```jsx
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
    ```

  - `printWinners(winners)`
    - 게임 종료 후 우승자를 출력.
    - 단독 우승자는 해당 이름만 출력.
    
    ```jsx
    최종 우승자 : pobi
    ```

    - 공동 우승자가 있을 경우 `,`로 구분하여 출력.
    
    ```jsx
    최종 우승자 : pobi, jun
    ```

