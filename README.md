# javascript-racingcar-precourse

## 기능 목록

> (+)는 개발중 추가된 기능입니다.
> (-)는 개발중 삭제된 기능입니다.

- [✅] 이름 입력 기능
  - [✅] 제시된 구문을 출력하고 이름 입력 받는 기능
  - [✅] 입력이 있는지 확인하는 기능 (+)
  - [✅] 쉼표를 구분자로 나누는 기능
    - [✅] 이름이 두개 이상인지 확인하는 기능 (+)
    - ~~[] 구분자가 올바른지 확인하는 기능 (-)~~
    - [✅] 이름을 구분자로 나누는 기능
  - [✅] 각 이름이 5자 이하인지 체크하는 기능
  - [✅] 각 이름에 맞는 클래스 생성하는 기능
- [✅] 시도 횟수 입력 기능
  - [✅] 제시된 구문을 출력하고 시도횟수 입력 받는 기능
  - [✅] 입력이 있는지 확인하는 기능 (+)
  - [✅] 숫자 체크 기능
    - [✅] 숫자외의 다른 값인지 체크 기능
    - [✅] 음수 체크 기능
    - [✅] 정수 체크 기능
  - [✅] 횟수 저장 기능
- [] 횟수 만큼 시도 실행 및 출력
  - [] 횟수만큼 시도하는 기능
    - [] 각 자동차에 대해 랜덤을 돌리는 기능
    - [] 각 자동차에 대해 랜덤수를 기준으로 전진 or 대기 판별하는 기능
    - [] 각 자동차 오브젝트에 진행한 만큼 숫자를 증가 하는 기능
    - [] 해당 오브젝트의 키를 가지고 이름과 거리를 출력하는 기능
- [] 결과 산출
  - [] 각 오브젝트의 거리를 비교하는 기능
  - [] 가장 큰놈들을 배열로 저장하는 기능
- [] 출력
  - [] 제시된 구문을 출력하고 결과값을 출력하는 기능

---

## 테스트케이스

- 자동차 이름 입력이 있는지 확인하는 기능

> 테스트케이스
>
> 입력 : 입력 없음!
>
> 기대출력 : '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)' (입력 값이 없을 경우 재차 물어봄)

- 자동차 이름이 두개 이상인지 확인하는 기능

> 테스트케이스
>
> 입력 : mer
>
> 기대출력 : "[ERROR] 자동차 이름을 두개 이상 입력해주세요"

- 각 이름이 5자 이하 인지 체크하는 기능

> 테스트케이스
>
> 입력 : pobium,mer,json | 5
>
> 기대출력 : "[ERROR] 자동차 이름은 5자 이하로 입력해주세요"

- 시도횟수 입력이 있는지 확인하는 기능

> 테스트케이스
>
> 입력 : 입력 없음!
>
> 기대출력 : '시도할 횟수는 몇 회인가요?' (입력 값이 없을 경우 재차 물어봄)

- 숫자 체크 기능 (숫자외의 다른 값인지 체크 기능)

> 테스트케이스
>
> 입력 : pobi,mer,json | a
>
> 기대출력 : "[ERROR] 시도 횟수는 양의 정수로 입력해주세요"

- 숫자 체크 기능 (음수 체크)

> 테스트케이스
>
> 입력 : pobi,mer,json | -1
>
> 기대출력 : "[ERROR] 시도 횟수는 양의 정수로 입력해주세요"

- 숫자 체크 기능 (정수 체크)

> 테스트케이스
>
> 입력 : pobi,mer,json | 2.2
>
> 기대출력 : "[ERROR] 시도 횟수는 양의 정수로 입력해주세요"
