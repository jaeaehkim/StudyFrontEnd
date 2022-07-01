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