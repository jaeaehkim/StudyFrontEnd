// String.prototype.indexOf()
const result = 'Hello World'.indexOf('Heropy')
console.log(result)

const str = 'Hello World'
console.log(str.length)

console.log(str.indexOf('HEROPY') !== -1)
console.log(str.slice(0,3))
console.log(str.replace('World','Heropy'))


const temp_email = 'thesecon@gmail.com'
console.log(temp_email.match(/.+(?=@)/)[0])

const str2 = '         hello world        '
console.log(str2.trim())


const pi = 3.14159265358979
const pistr = pi.toFixed(2)
console.log(pistr)
console.log(typeof pistr)

const piint = parseInt(pistr)
const pifloat = parseFloat(pistr)
console.log(piint)
console.log(pifloat)

console.log('abs', Math.abs(-12))
console.log('min', Math.min(1,5))
console.log('max', Math.max(1,5))
console.log('ceil', Math.ceil(3.14))
console.log('fllor', Math.floor(3.14))
console.log('round', Math.round(3.14))
console.log('random', Math.random())


const numbers = [1,2,3,4]
const fruits = ['Apple', 'Banana', 'Cherry']
console.log(numbers[1])
console.log(fruits[2])
console.log(numbers.concat(fruits))


// .forEach

const a = fruits.forEach(function (element, index, array) {
    console.log(element, index, array)
})
console.log(a)

// 새로운 배열 만들어서 반환
const b = fruits.map(function (fruit, index) {
    return `${fruit}-${index}`
})
console.log(b)

const c = fruits.map(function (fruit, index) {
    return {
        id: index,
        name: fruit
    }
})
console.log(c)

// this를 안 쓴다면 딱히 차이가 없음
const d = fruits.map((fruit, index) => {
    return {
        id: index,
        name: fruit
    }
})
console.log(d)

// 화살표 함수 축약
const e = fruits.map((fruit, index) => ({
    id: index,
    name: fruit
}))
console.log(e)

// .filter()
// const f = numbers.map(number => {
//     return number < 3
// })
const f = numbers.map(number => number < 3)
console.log(f)

// const g = numbers.filter(number => {
//     return number < 3
// })
const g = numbers.filter(number => number < 3)
console.log(g)

// 정규표현식 find
// const h = fruits.find(fruit => {
//     return /^B/.test(fruit)
// })
const h = fruits.find(fruit => /^B/.test(fruit))
console.log(h)

const i = fruits.findIndex(fruit => /^B/.test(fruit))
console.log(i)

const j = fruits.includes('Apple')
console.log(j)

// push, unshift : 원본이 수정됨에 주의
numbers.push(5)
console.log(numbers)

numbers.unshift(0)
console.log(numbers)

// reverse
numbers.reverse()
console.log(numbers)

// .splice
numbers.splice(2, 1, 999)
console.log(numbers)


const userAge = {
    name: 'Heropy',
    age: 85
}

const userEmail = {
    name: 'Heropy',
    email: 'thesecon@gmail.com'
}

const target = Object.assign({}, userAge, userEmail)  // {}을 통해서 원본을 손상하지 않으면서 합침
console.log(target)
console.log(userAge)
console.log(target === userAge)

const a1 = {k : 123}
const a2 = {k : 123}
console.log(a1===a2)

const user = {
    name: 'Heropy',
    age: 85,
    email: 'thesecon@gmail.com'
}

const keys = Object.keys(user)
console.log(keys)
console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)

// 구조 분해 할당 (Destructuring assignment)
const user2 = {
    name: 'Heropy',
    age: 85,
    email: 'thesecon@gmail.com'
}
const {name, age, email, address} = user2
console.log(name, age, email)
console.log(address)


const fruits2 = ['Apple', 'Banana', 'Cherry']
const [ta, tb, tc, td] = fruits
console.log(ta,tb,tc,td)
// 전개 연산자
console.log(...fruits)

function toObject(a, b, c) {
    return {
        a: a,
        b: b,
        c: c
    }
}

// const toObject = (a, b, ...c) => ({a, b, c})
console.log(toObject(...fruits))