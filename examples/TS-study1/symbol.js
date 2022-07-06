"use strict";
console.log(Symbol('foo'));
// symbol은 primitive 타입의 값을 담아서 사용 -> 고유하고 수정불가능한 값으로 변모
console.log(Symbol('foo') === Symbol('foo'));
// 접근 제어자로 활용
const sym = Symbol();
const obj = {
    [sym]: "value"
};
console.log(obj[sym]);
