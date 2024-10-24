# javascript-racingcar-precourse

## 기능 목록 정리

### 사용자 입력 받기

- [x] 경주할 자동차 이름
- [ ] 시도할 횟수

### 게임 진행하기

- [ ] 자동차 이름 자동차 객체로 만들기
- [ ] 전진 조건 구현 (0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우 전진)
- [ ] 전진 조건 실행해서 현재 위치 업데이트
- [ ] 자동차의 현재 위치 출력 (자동차를 출력할 때 자동차 이름을 같이 출력)
- [ ] 세임 횟수만큼 반복 실행

### 최종 우승자 출력

- [ ] 최종 우승자가 한 명일 경우
- [ ] 여러 명의 우승자가 있으면 공동 우승자로 처리하고, 쉼표로 구분하여 출력

### 제한 사항

- [ ] 경주할 자동차의 수는 최소 2대에서 최대 50대까지 제한 (경주할 자동차의 수가 너무 많으면 정신 없으니까...)
- [ ] 시도할 횟수는 최소 1회에서 최대 500회까지 제한 (경주를 너무 많이 시도하면 건강에 안좋으니까...)

### 예외 처리

- [ ] 입력받은 자동차 이름에 쉼표가 없을 경우 (경주할 자동차가 1대일 수 있지만, 혼자 게임을 하면 쓸쓸하니까...)
- [ ] 쉼표로 구분한 자동차 이름이 6자 이상일 경우
- [ ] 자동차 이름이 공백이거나 빈 문자열일 경우
- [ ] 자동차의 이름이 중복될 경우
- [ ] 시도할 횟수가 숫자가 아닐 경우
- [ ] 시도할 횟수가 1 이상의 자연수가 아닐 경우
- [ ] 경주할 자동차의 수가 제한을 초과할 경우
- [ ] 시도 횟수가 제한을 초과할 경우

## 추가 고려 사항

### 프로그래밍 요구 사항

- [ ] indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
- [ ] 3항 연산자를 쓰지 않는다.
- [ ] 함수(또는 메서드)가 한 가지 일만 하도록 최대한 작게 만들어라.

### 2주 차 학습 목표

- [ ] 여러 역할을 수행하는 큰 함수를 단일 역할을 수행하는 작은 함수로 분리하기
- [ ] 테스트 도구를 사용하는 방법을 배우고 프로그램이 제대로 작동하는지 테스트하기

### 1주 차 공통 피드백 반영

- [ ] 함수, 클래스의 이름을 좋은 이름으로 짓기 위해 노력 (함수, 클래스의 역할에 대한 의도를 드러낼 수 있게)
- [ ] 공백 라인을 의미있게 사용
- [ ] 의미 없는 주석 하지 않기
