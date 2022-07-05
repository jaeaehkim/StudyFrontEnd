// 데이터 불변성
// 원시데이터 : String, Number, Boolean, undefined, null
//  -> 간단하게는 생긴게 같으면 같고, 다르면 다르다
// 참조형데이터 : Object, Array, Function
//  -> 
// 두가지 데이터 유형에 따라 새로운 메모리를 할당해서 하는지 기존 것을 참조하게 하는지 


// 깊은 복사 얕은 복사, value 단까지 복사하느냐 마느냐

import _ from 'lodash'
import checkType from './getType'
import { random, user as jaehkim} from './getRandom'
import * as R from './getRandom'


const copyUser = _.cloneDeep(jaehkim)

console.log(_.camelCase('the hello world'))
console.log(checkType([1,2,3]))
console.log(random(), random())
console.log(jaehkim)
console.log(R)