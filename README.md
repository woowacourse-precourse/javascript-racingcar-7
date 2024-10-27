# javascript-racingcar-precourse

## **문자열 덧셈 계산기**

### **기능 요구 사항**

초간단 자동차 경주 게임을 구현한다.

- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력할 경우 "[ERROR]"로 시작하는 메시지와 함께 `Error`를 발생시킨 후 애플리케이션은 종료되어야 한다.

## **입출력 요구 사항**

### **입력**

- 경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)
  - 예: pobi,woni,jun
- 시도할 횟수
  - 예: 5

### **출력**

- 차수별 실행 결과

```
pobi : --
woni : ----
jun : ---
```

- 단독 우승자 안내 문구
```
최종 우승자 : pobi
```

- 공동 우승자 안내 문구
```
최종 우승자 : pobi, jun
```

### **실행 결과 예시**

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

---

### 구현 기능 목록 

- [x] 쉼표를 포함한 경주할 자동차 이름 문자열 입력 받기, 사용자가 이동 횟수 입력 받기
- [x] 쉼표를 기준으로 자동차 이름과 전진 횟수 부여
- [ ] 주어진 횟수 동안 자동차 전진 또는 멈춤 구현
- [ ] 전진 조건은 0~9 사이 랜덤 값에서 4 이상일 경우
- [ ] 횟수마다 결과를 출력
- [ ] 게임 완료 후 출력 조건에 맞춰 우승자(한명 이상 가능) 출력, 쉼표로 구분
- [ ] 잘못된 값 입력 시 `[ERROR]` 메시지와 `ERROR`발생 후 애플리케이션 종료 

### 예외처리 목록 

- [ ] 자동차 이름이 5자 이하가 아닌 경우
- [ ] 구분자가 쉼표가 아닌 경우
- [ ] 사용자 입력이 숫자가 아닌 경우
- [ ] 시도 횟수가 0인 경우
- [ ] 경주할 자동차가 1대인 경우