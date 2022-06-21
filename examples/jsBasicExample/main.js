// 변수 선언
let myName = "jaehkim";
let email = 'rebuilding1303@gmail.com'
let hello = `Hello ${myName}`

console.log(myName);
console.log(email);
console.log(hello);


let user = {
    name: 'jaehkim',
    age: 30
};

console.log(user);
console.log(user.age);

// 상수 선언
const a = 2;
const b = 5;

console.log(a);
console.log(a+b);

// 함수
function helloFunc() {
    console.log('helloFunc');
}

function returnFunc() {
    return 123;
}

helloFunc();

let ret = returnFunc();
console.log(ret)


function sum(a, b) {
    return a+b;
}

let temp1 = sum(1,2);
let temp2 = sum(7,12);
let temp3 = sum(2,4);

console.log(temp1, temp2, temp3)

// 객체 데이터
const heropy = {
    name: 'HEROPY',
    age: 85,
    // 메소드
    getName: function() {
        // this == 객체
        return this.name
    }
}

const hisName = heropy.getName();
console.log(hisName);
console.log(heropy.getName());

// 조건문
let isShow = true;
let checked = false;

if (isShow) {
    console.log('Show');
}

if (checked) {
    console.log('Checked');
} else {
    console.log('Hide');
}