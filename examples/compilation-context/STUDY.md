# compileOnSave
- "compileOnSave": true,
- true / false (default false)
- true일 때 누가 compile 시켜주는가?
    - vscode 2015 with TS 1.8.4 이상
    - atom-typescript 플러그인
        - https://github.com/TypeStrong/atom-typescript#comple-on-save
- 알아서 해주기 때문에 별로 중요한 옵션은 아님

# extends
- "extends": "./base.json" 파일 경로명, TS 2.1 이상 -> 실제 이런 원리로 작동한다는 것을 보여주기 위함
- npm install --save-dev @tsconfig/deno 
    - {
        "extends" : "@tsconfig/deno/tsconfig.json"
    }

# files, include, exclude
- filesDefinition, excludeDefinition, includeDefinition
- files > exclude > include
- 셋다 설정이 없으면 전부 컴파일
- files
    - 상대 혹은 절대 경로의 리스트 배열
- include, exclude
    - glob pattern, .gitignore
    - include
        - exclude 보다 약하고 *을 사용하면 .ts, .tsx, .d.ts만 포함
    - exclude
        - 설정 안하면 node_modules, bower_components, jspm_packages, <outDir>을 default로 제외
        - <outDir>은 항상 제외, include에 있어도

# compileOptions : type
- typde definition 시스템
    - npm i --save-dev @types/react
- 아무 설정을 안하먄
    - node_modules/@types 라는 모든 경로를 찾아서 사용
- typeRoots를 사용하면?
    - 배열 안에 들어있는 경로들 아래서만 가져옴
- types를 사용하면?
    - 배열 안의 모듈 혹은 ./node_modules/@types/ 안의 모듈 이름에서 찾아옴
    - []을 넣는다는건 이 시스템을 사용하지 않겠다는 것
- typeRoots와 types를 같이 사용하지는 않음

# compileOptions : target & lib
- target
    - 빌드의 결과물을 어떤 버전으로 할 것이냐
    - 지정을 안하면 es3
        - es6로 테스트해보기
- lib
    - 기본 type definition 라이브러리 어떤 것을 사용할 것이냐
    - lib 지정 x
        - target 'es3' > 디폴트 lib.d.ts
        - target 'es5' > 디폴트 dom, es5, scripthost
        - target 'es6' > 디폴트 dom, es6, dom.iterable, scripthost
    - lib 지정시 그 lib 배열로만 라이브러리 사용
        - 빈 [] => no definition

# compileOptions : outDir, outFile, rootDir
- "outDir": "./dist", "rootDir": "./src", 

