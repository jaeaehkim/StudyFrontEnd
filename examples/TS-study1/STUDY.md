# type
- 자바스크립트 : 다이나믹 타입 (런타임 상황에서만 앎)
- 타입스크립트 : 스태틱 타입 (개발할 때 앎)

# Primitive Type
- 오브젝트/레퍼런스 vs 프리미티브형
   - boolean, number, string, symbol, null, undefined
     - 리터럴 값으로 서브타입으로 표현
     - 래퍼 객체로 만들 수 있음 
        - Boolean(true), String('world')
           - 래퍼객체로 사용하는 것이랑 타입으로 사용하는 것을 구별

    
# 타입 시스템
- 컴파일러에서 사용하는 타입을 명시적으로 지정하는 시스템
- 컴파일러가 자동으로 타입을 추론하는 시스템
- 타입스크립트의 타입시스템
   - 명시적 지정할 수 있음
   - 명시적으로 지정하지 않는 경우 자동으로 타입 추론
   - noImplicitAny 옵션
      - any라면 명시적으로 any를 타입할 것을 요청
   - strictNullChecks 옵션
      - 모든 타입에 자동으로 포함되어 있는 null, undefined를 제거
   - noImplicitReturns 옵션
      - 함수 내에서 모든 코드가 값을 리턴하지 않으면, 컴파일 에러를 발생
   - obejct literal type
      - 그대로 명시하는 경우 -> 너무 길어서 힘듦 -> interfaces, type alias, class를 활용
   - strictFunctionTypes 옵션
      - 함수를 할당할 시에 함수의 매개변수 타입이 같거나 슈퍼타입인 경우가 아닌 경우, 에러를 경고

# Structural Type System vs Nominal Type System
## Structural Type System
- 구조가 같으면 같은 타입이다. -> 타입스크립트
- Nominal Type System : 이름이 다르면 다른 타입
- duck typing
  - 오리와 행동이 똑같으면 오리다.

# sub type vs super type
- super type에 sub type을 할당할 수 있으나 반대로는 안된다.
- any는 변칙적
- 같거나 서브타입인 경우 할당 가능 -> 공변
- 함수의 매개변수의 경우 타입만 같거나 슈퍼타입인 경우, 할당이 가능 -> 반병

# Type Alias : 타입 별칭
- Interface랑 비슷
- Primitive, Union Type, Tuple, Function
- 만들어진 타입의 refer로 사용하는 것이지 타입을 만드는 것은 아님


# tsconfig schema
- https://json.schemastore.org/tsconfig
- 최상위 프로퍼티
    - compileOnSave
    - extends
    - compileOptions
    - files
    - include
    - exclude
    - references