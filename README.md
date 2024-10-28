# javascript-racingcar-precourse

## 기능 목록

### Presentaion Layer

- [x] 입력 프롬프트를 띄우고 자동차 이름 및 시도할 횟수에 대한 입력을 받는 기능

### Application Layer

- [x] **Presentation Layer**의 입력값을 처리하는 기능 

  * [x] 입력된 Raw Input의 유효성을 검증하는 기능 (validation)
    +  입력값은 공백이 될 수 없다.
    +  이를 만족하지 못한 경우, '[ERROR]'로 시작하는 에러 메세지를 출력하며 프로그램을 종료한다. 
  
  * [x] 쉼표(,)를 기준으로 자동차 이름을 분리하는 기능 (utils)

- [ ] 처리한 입력값을 **Domain Layer**에 전달하는 기능

### Domain Layer

- [x] **Car Domain**

  * [x] ```Car Class``` 구현

  * [x] 자동차 이름에 대한 유효성을 검증하는 기능 (validation)
    +  자동차의 이름은 1자 이상, 5자 이하이다.
    +  이를 만족하지 못한 경우, '[ERROR]'로 시작하는 에러 메세지를 출력하며 프로그램을 종료한다. 
  
  * [x] 자동차가 전진 또는 정지하는 기능
    + 각 회차 마다 자동차가 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.

- [x] **Racing Cars Domain**

  * [x] ```Racing Car``` class 구현

  * [x ] 레이싱에 출전할 자동차들의 Car Class를 각각 생성하고, 유효성을 검증하는 기능 (create & validation)
    - 자동차의 이름들은 중복이 허용되지 않는다.
    - 이를 만족하지 못한 경우, '[ERROR]'로 시작하는 에러 메세지를 출력하며 프로그램을 종료한다. 

  * [x] 각각의 자동차들을 한번에 움직이는 기능

- [ ] **Round Domain** 

  * [ ] ```Round claas``` 구현

  * [ ] 시도할 횟수(Target Round)에 대한 유효성을 확인하는 기능 (validation)
    - 시도할 횟수는 양의 정수여야 한다.
    - 이를 만족하지 못한 경우, '[ERROR]'로 시작하는 에러 메세지를 출력하며 프로그램을 종료한다.

  * [ ] 현재 라운드와 목표 라운드를 비교하는 기능

  * [ ] 현재 라운드를 증가 시키는 기능

- [ ] **Racing Domain**

  * [ ] ```Racing Class``` 구현

  * [ ] 각각의 자동차를 시도할 횟수 만큼 경주 시키는 기능 
  
  * [ ] 우승자를 선별 하는 기능
    + 이때 우승자는 한 명 이상일 수 있으며 모든 자동차가 이동하지 못할 경우 우승자는 없다.

### Application Layer
 
- [ ] 각 회차에 대한 결과를 **Presentation Layer**에 전달하는 기능

- [ ] 우승자 정보를 **Presentation Layer**에 전달하는 기능

### Presentation Layer

- [ ] 각 회차에 대한 결과를 주어진 형식에 맞춰 출력하는 기능

- [ ] 우승자를 안내 문구 형식에 맞춰 출력하는 기능
  + 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
