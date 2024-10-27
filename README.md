# javascript-racingcar-precourse

---

## 구현 기능 목록

### **입력**

#### 경주할 자동차 이름 입력

> **초기 기획**
>
> ```javascript
> 
> 1. 사용자의 입력을 비동기로 입력받고 변수에 저장한다
> 2. 변수의 문자열을 쉼표로(,) split해서 배열로 변환한다
> 3. 배열로 변환된 값의 각 요소의 유효성을 검사한다
>  - 5자 이하인 값인지 검사한다
>  - 유효성을 통과하지 못했을 경우 에러를 반환한다
> 4. 유효성을 통과한 값의 배열을 반환한다
> 
> ```

---

> **최종 구현**
>
> ```javascript
> carNameInput()
>
> 1. Console.readLineAsync를 활용해서 사용자에게 입력 값을 받고 상수에 저장한다(상수명: USER_INPUT)
> 2. split 메소드를 활용해서 입력 받은 문자열을 (',')로 나눠서 배열로 변환한다(상수명: CAR_LIST)
> 3. checkCarName(CAR_LIST)으로 입력값의 유효성을 검사한다
> 4. 유효성을 통과한 CAR_LIST를 반환한다.
> ```
>
> ```javascript
> checkCarName(carList)
>
> 1. 매개변수: carList
> 2. forEach 메소드를 활용해서 배열내 값의 유효성을 검사한다.
>   - 글자 수가 5 초과인지
>   - 글자 수가 0 인지
>   - 중복된 요소가 존재하는지
>     1. filter 메소드를 활용해서 배열을 생성
>     2. filter한 배열의 값이 1개 이상일 경우 에러를 발생
> 3. 유효성 검사에 해당하는 메시지를 선언
> 4. 메시지를 활용하여 에러 객체를 생성
> 5. throw Error
> ```

#### 시도할 횟수 입력

> **초기 기획**
>
> ```javascript
> 1. 사용자의 입력을 비동기로 입력 받는다
> 2. 입력받은 문자열을 Number로 변환한다
> 3. 변환한 입력값의 유효성을 검사한다.
>  - NaN, 1 미만, decimal, 
>  - 유효성을 통과하지 못했을 경우 에러를 던진다
> 4. 유효성을 통과한 정수 값을 반환한다.
> ```

---

> **최종 구현**
>
> ```javascript
> trialCountInput()
> 
> 1. Console.readLineAsync를 활용해서 사용자의 입력을 받아서 상수에 저장(상수명: USER_INPUT)
> 2. USER_INPUT을 Number로 변환한 상수를 선언(상수명: TRIAL_COUNT)
> 3. checkTrialCount(TRIAL_COUNT) 로 입력값의 유효성을 검사
> 4. 유효성을 통과한 TRIAL_COUNT를 반환
> ```
>
> ```javascript
> checkTrialCount(trialCount)
>
> 1. 매개변수: trialCount
> 2. 분기문을 활용하여 유효성 검사를 실시
>   - isNaN, 1보다 작은 값, decimal
> 3. 유효성에 문제가 있을 경우 해당 에러 메시지를 선언
> 4. 에러 메시지를 활용해서 에러 객체를 생성
> 5. throw ERROR
> ```

### **진행 상황 저장**

> **초기 기획**
>
> ```javascript
> 
>   1. 유효성을 통과한 자동차 이름의 배열을 매개 변수로 받는다
>   2. 해당 배열을 map 메서드를 이용해서 ['자동차 이름', ''] 형태로 변환
>   3. 변환된 배열을 활용해서 Map 자료구조를 생성
>   4. Map을 반환
>   
> ```

---

> **최종 구현**
>
> ```javascript
> createRacerInformation(racerList)
> 
> 1. 매개변수(racerList)
> 2. map 메소드를 활용하여 racerList를 [ 자동차 이름, '' ] 형태로 변환하여 상수로 선언(상수명: DEFAULT_RACER_LIST)
> 3. Map 생성자를 활용하여 DEFAULT_RACER_LIST를 사용하여 새로운 Map을 생성(상수명: RACER_MAP)
> RACER_MAP을 반환
> ```

### **출력**

#### 1. 차수별 실행 결과

> 초기 기획

```javascript
  1.~ 매개 변수로 자동차 배열, 레이스 초기 데이터, 시행 횟수를 받는다
  2. 레이스 결과를 저장할 레이스 데이터를 선언
  3. 반복문을 활용하여 시행 횟수와 레이서의 수만큼 레이스 결과를 실행한다
    - goStopResult의 결과를 변수에 저장
    - 해당 결과를 레이스 데이터에 set
    - 한 사이클을 돌은 결과를 출력
  4. 레이스 결과를 반환
```

---

> 최종 구현
>
> ```javascript
> raceProgression(carList, initialRaceHistory, trialCount)
> 
> 1. 매개변수: carList, initialRaceHistory, trialCount
> 2. 레이스 진행 결과를 저장한 상수를 선언(상수명: RACE_PROGRESS)
> 3. 반복문을 활용하여 시행 횟수 만큼 문자열을 출력
>   - 반복 횟수 : trialCount
>   - 출력할 문자열의 변수를 초기화(변수명: singleRace)
>   - 레이스 진행 결과를 구분하기 위해 시행 횟수가 0이 아닐 경우 (\n)을 변수에 대입
>   - forEach 메소드를 활용하여 carList의 횟수 만큼 반복을 실행
>     - goStopResult()를 호출하여 진행 여부를 상수에 저장(상수명: GO_STOP)
>     - 기존 진행 결과와 현재 진행 결과를 상수에 저장(상수명: PROGRESS_RESULT)
>     - 해당 결과를 레이스 진행 결과에 set
>     - 출력할 문자열에 `자동차 이름 : PROGRESS_RESULT` 을 더함
> - 1회 실행 결과를 출력
> 4. 레이스의 진행 결과를 반환
> ```

### **전진, 멈춤**

> 초기 기획
>
> ```javascript
> 1. Random.pickNumberInRange 를 활용하여 0 ~ 9 사이의 무작위 숫자를 생성
> 2. let result = '' 로 변수 초기화
> 3. 생성된 숫자가 4 이상일 경우를 분기
>     - 4 이상일 경우 "-" 를 result에 할당
> 4. result를 반환
> ```

---

> 최종 구현
>
> ```javascript
> goStopResult()
> 
> 1. Random.pickNumberInRange(0, 9)를 활용하여 0 ~ 9 사이의 값을 상수에 저장(상수명: RANDOM_NUMBER)
> 2. 반환한 변수를 '' 로 초기화(변수명: result)
> 3. 분기문을 활용해서 RANDOM_NUMBER가 4 이상일 경우 result에 '-' 를 대입
> 4. result를 반환
> ```

### 우승자 안내 문구

> 초기 기획
>
> 1. 매개변수로 레이스 결과가 저장된 Map, 자동차 리스트를 받는다
> 2. 출력할 결과 문구의 변수를 초기화 한다 (최종 우승자: 자동차 이름)
> 3. 우승자를 저장할 빈 배열을 생성한다
> 4. 반복문을 사용해서 자동차 리스트를 활용해 레이스 결과를 순회한다
>     - 레이스 결과 Map을 확인하여 value 값을 확인 후 우승자 배열에 추가한다.
> 5. 우승자 배열을 ' ,' 을 기준으로 join하여 문자열로 변환한다.
> 6. 결과 문구와 우승자 문구를 합친다
> 7. 우승자를 출력한다
>

---

> 최종 구현
>
>
> ```javascript
> getWinner(carlist, raceProgress)
>
> 1. 매개변수: carList, raceProgress 
> 2. 우승자를 출력할 기본 텍스트를 상수로 선언(상수명: RESULT_DEFAULT_TEXT)
> 3. getResultCountArray(carList, raceProgress)를 호출하여 레이스 결과 (형태: '---')를 숫자로 변환한 배열을 얻는다
> 4. sort 메소드를 활용하여 숫자를 기준으로 배열을 정렬한다
> 5. getRaceWinners(RACE_RESULT_COUNT)를 호출하여 우승자의 이름, 진행 결과를 얻는다.
> 6. 우승자의 이름을 출력하기 위해 진행 결과를 제외한 배열을 상수로 선언(상수명:WINNER_NAMES)
> 7. join 메소드를 활용하여 배열을 문자열로 변환한 상수를 선언(상수명: WINNER_TEXT)
> 8. 기본 텍스트와 우승자 이름 문자열을 합친다
> 9. 최종 우승자를 출력한다
> ```
>
> ```javascript
> getResultCountArray(carList, raceProgress)
>
> 1. 매개변수: carList, raceProgress
> 2. map 메소드를 활용하여 문자열 형태의 레이스 결과('-')를 변환한 배열을 생성한다
>     - Map형태의 진행결과 데이터에서 레이스 결과를 가져온다
>     - 레이스 결과를 ('-' -> 문자열의 길이)로 변환한다
>     - [자동차 이름, 문자열의 길이] 형태로 변환한다
> 3. 생성된 배열을 반환한다
> ```
>
> ```javascript
> getRaceWinners(raceResultCountArray)
> 
> 1. 매개변수: raceResultCountArray
> 2. 빈 배열을 상수로 선언한다(상수명: WINNERS)
> 3. forEach 메소드를 활용하여 배열을 순회한다
>     - 자동차의 진행 결과를 상수로 선언한다(상수명: RACE_LENGTH)
>     - 첫번째 시도에서는 WINNERS에 첫번째 요소를 push한다
>     - 이후의 시도에서는 WINNERS 배열에 존재하는 값의 진행 결과와 순회하는 값의 진행 결과를 비교한다
>         - 진행 결과가 같을 경우 WINNERS 배열에 자동차의 정보를 push 한다
> 4. WINNERS를 반환한다
> ```

## 회고

---

### 1. 지원서에 작성한 목표를 얼마나 달성하고 있다고 생각하나요? 그 이유는 무엇인가요?

---

### 2. 지원서에 작성한 목표를 변경해야 한다고 생각하시나요? 그렇다면 그 이유와 어떤 목표로 변경하고 싶으신가요?

---

### 3. 프리코스를 진행하면서 눈에 띄는 변화나 깨달은 점이 있나요?
