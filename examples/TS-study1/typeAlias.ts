type MyStringType = string;

const str = 'World';

let myStr: MyStringType = 'Hello';
myStr = str;
console.log(myStr);


let person3: string | number = 0;
person3 = 'Mark';

type StringOrNumber = string | number;
let another: StringOrNumber = 0;
another = 'Anna';

console.log(another);