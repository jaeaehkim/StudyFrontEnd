import getType from './getType'
import random from './getRandom'

console.log(typeof "Hello World!");
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);


console.log(getType(123));
console.log(getType(false));

console.log(1+2);
console.log(5-7);
console.log(10/2);
console.log(7%5);


const a = 2;
let b = 3;
b = b+1;
console.log(b);


console.log(a===b)
function isEqual(x,y) {
    return x===y
}

console.log(isEqual(1,1));
console.log(isEqual(1,'1'));
console.log(a !== b);
console.log(true && true && false);

const c = random();

switch (c) {
    case 0:
        console.log('a is 0')
        break
    case 2:
        console.log('a is 2')
        break
    case 4:
        console.log('a is 4')
        break
    default:
        console.log('rest...')
}

if (c === 0) {
    console.log('a is 0')
} else if (c === 2) {
    console.log('a is 2')
} else if (c === 4) {
    console.log('a is 4')
} else {
    console.log('rest...')
}

const ulEl = document.querySelector('ul')

for (let i = 0; i < 10; i += 1) {
    // console.log('for', i)
    const li = document.createElement('li')
    li.textContent = `list-${i+1}`
    if ((i+1) % 2 === 0) {
        li.addEventListener('click', function () {
            console.log(li.textContent)
        })
    }
    
    ulEl.appendChild(li)
}

function sum() {
    console.log(arguments)
    return arguments[0] + arguments[1]
}

console.log(sum(7,3))

// var, let, const : 함수레벨 vs 블록레벨 스코프 차이


// 화살표 함수
const doubleArrow = (x) => x * 2
console.log('doubleArrow', doubleArrow(7))

const doubleArrow2 = (x) => ({ name : 'Heropy'})
console.log('doubleArrow2', doubleArrow2(7))

// IIFE, Immediately-Invoked Function Expression
const k = 7;
(function () {
    console.log(k*2)
}());

// 호이스팅 (Hoisting) : 함수 선언부가 유효범위 최상단으로 끌어 올려지는 현상
double ()
function double () {
    console.log(100)
}

// 타이머 함수
// setTimeout(함수, 시간) : 일정 시간 후 함수 실행
// setInterval(함수, 시간) : 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수 종료
// clearInterval(): 설정된 Interval 함수를 종료

// const timer = setTimeout( () => {
//     console.log('Heropy')
// }, 3000)

const timer = setInterval( () => {
    console.log('Heropy')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
    // clearTimeout(timer)
    clearInterval(timer)
})


// 콜백(Callback)
// 함수의 인수로 사용되는 함수 : 세부 동작의 위치를 동적으로 보장해줌.
// setTimeout(함수, 시간)
function timeout(cb) {
    setTimeout(() => {
        console.log('Heropy')
        cb()
    }, 3000)
}

timeout(() => {
    console.log('Done!')
})


//  생성자 함수 (prototype)
const heropy = {
    firstName: 'Heropy',
    lastName: 'Park',
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

const neo = {
    firstName: 'Neo',
    lastName: 'Smith',
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log('heropy1', heropy)
console.log('heropy2', heropy.getFullName())

console.log('neo1', neo)
console.log('neo2', neo.getFullName())

// 생성자 함수 (prototype) 예제
//// 리터럴 방식
function User(first, last) {
    this.firstName = first
    this.lastName = last
    // this.getFullName = function () {
    //     return `${this.firstName} ${this.lastName}`
    // }
}

User.prototype.getFullName = function () {
    // 메모리에 딱 1번만 만들어짐
    // 각 인스턴스는 이것을 참조만 하는 것
    return `${this.firstName} ${this.lastName}`
}

const heropy3 = new User('Heropy', 'Park')
const amy3 = new User('Amy', 'Clarke')
const neo3 = new User('Neo', 'Smith')
console.log('heropy3', heropy3.getFullName())
console.log('amy3', amy3.getFullName())
console.log('neo3', neo3.getFullName())


// this
// 일반(Normal) 함수는 호출 위치에 따라 this 정의
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의

const heropy4 = {
    name: 'Heropy',
    normal: function () {
        console.log(this.name)
    },
    arrow : () => {
        console.log(this.name)
    }
}

console.log('heropy4 n', heropy4.normal())
// console.log('heropy4 a', heropy4.arrow()) // 찾지못함

const amy4 = {
    name: 'Amy',
    normal: heropy4.normal,
    arrow: heropy4.arrow
}

console.log('amy4 n', amy4.normal())
//console.log('amy4 a', amy4.arrow()) // 찾지못함

function User1(name) {
    this.name = name
}

User1.prototype.normal = function () {
    console.log(this.name)
}

User1.prototype.arrow = function () {
    console.log(this.name)
}

const temp1 = new User1('Heropy')
console.log('temp1 n', temp1.normal())
console.log('temp1 a', temp1.arrow())


// const timer1 = { 
//     name: 'Heropy!',
//     timeout: function () {
//         setTimeout(function () {
//             console.log(this.name)
//         }, 2000)
//     }
// }

const timer1 = { 
    name: 'Heropy!timer',
    timeout: function () {
        setTimeout(() => {
            console.log(this.name)
        }, 2000)
    }
}

timer1.timeout()



class User {
    constructor(first, last) {
        this.firstName = first
        this.lastName = last
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }

}
const heropy6 = new User('Heropy', 'Park')
const amy6 = new User('Amy', 'Clarke')
const neo6 = new User('Neo', 'Smith')