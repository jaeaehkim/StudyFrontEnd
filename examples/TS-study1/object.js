"use strict";
// object : non-primitive type을 나타냄
// not number, string, boolean bigint, symbol, null, undefined
// create by object literal
// person1 is not "object" type
// person1 is "{name: 'Mark', age: 39}" type
const person1 = { name: 'Mark', age: 39 };
console.log(typeof person1);
const person2 = Object.create({ name: 'Mark', age: 39 });
console.log(typeof person2);
create({ prop: 0 });
create(null);
// create(42);
// create("string");
// create(false);
// create(undefined);
