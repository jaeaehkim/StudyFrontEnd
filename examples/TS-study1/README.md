- setting
  - npm i typescript -g // global
  - tsc test.ts 
  - tsc --init // tsconfig.json 생성되고 해당 파일에 따라 tsc 명령어 수행시 이에 따라 작동
  - tsc -w // watch 모드 실시간
  - npm uninstall typescript -g 

- 순서대로
  - npm init -y
  - npm i typescript // local , 폴더 내에 node_modules , package-lock.json(snapshot) 생성
  - ls node_modules // typescript 폴더가 있음
  - ls node_modules/.bin

- tsc 실행
  - node_modules/.bin/tsc
  - node_modules/typescript/bin/tsc

- 명령어
  - npx tsc // npm의 기능
  - npx tsc --init // tsc --init , tsconfig 생성
  - npx tsc -w // watch 모드

- package.json scripts 수정
  - npm run build
  - npm run build:watch

- js 파일 실행
  - node boolean.js

- ref
  - https://smoh.tistory.com/323
