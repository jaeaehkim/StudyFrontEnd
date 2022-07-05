import myData from './myData.json'

console.log(myData)

const user = {
    name: 'HEROPY',
    age: 85,
    emails: [
        'thesecon@gmail.com',
        'neo@zillinks.com'
    ]
}

console.log('user', user)

const str = JSON.stringify(user)
console.log('str', str)
console.log(typeof str)

const obj = JSON.parse(str)
console.log('obj', obj)