import _ from 'lodash'

const usersA = [
    { userId: '1', name: 'HEROPY' },
    { userId: '2', name: 'Neo' }
]

const usersB = [
    { userId: '1', name: 'HEROPY' },
    { userId: '3', name: 'Amy' }
]

const usersC = usersA.concat(usersB) // 중복 포함해서 출력
console.log('concat', usersC)
console.log('uniqBy', _.unionBy(usersC, 'userId')) //userId를 기준으로 중복 걸러냄

const usersD = _.unionBy(usersA, usersB, 'userId')
console.log('unionBy', usersD)


const users = [
    { userId: '1', name: 'HEROPY' },
    { userId: '2', name: 'Neo' },
    { userId: '3', name: 'Amy' },
    { userId: '4', name: 'Evan' },
    { userId: '5', name: 'Lewis' }
]

const foundUser = _.find(users, { name:'Amy' })
console.log('foundUser', foundUser)

const foundUserIndex = _.findIndex(users, { name:'Amy' })
console.log(foundUserIndex)

_.remove(users, { name : 'HEROPY' })
console.log(users)