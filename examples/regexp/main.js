const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http://localhost:1234
동해물과_백두산이 마르고 닳도록
`

const regexp1 = new RegExp('the', '')
console.log('regexp1', str.match(regexp1))

const regexp2 = new RegExp('the', 'g')
console.log('regexp2', str.match(regexp2))

const regexp3 = new RegExp('the', 'gi')
console.log('regexp3', str.match(regexp3))

//리터럴 방식
const regexp4 = /the/gi
console.log('regexp4', str.match(regexp4))

const regexp5 = /fox/gi
console.log('regexp5', regexp5.test(str))
console.log('regexp6', str.replace(regexp5, 'AAA'))
console.log(str)

console.log(str.match(/\.$/gi)) // $-> 문자데이터 끝 부분에 .이 있는가?
console.log(str.match(/\.$/gim)) // m -> 각 줄에서 끝나는 부분. 각 줄을 시작과 끝으로 해석하겠다.

console.log(
    str.match(/d$/g),
    str.match(/d$/gm),
    str.match(/^t/gm),
    str.match(/^T/gm),
    str.match(/^t/gmi)
)

console.log(
    str.match(/./g)
)

console.log(
    str.match(/h..p/g),
    str.match(/fox|dog/g)
)

console.log(
    str.match(/https?/g)
)

console.log(
    str.match(/d{2}/),
    str.match(/d{2}/g),
    str.match(/d{2,}/),
    str.match(/d{2,3}/g)
)

console.log(
    str.match(/\w{2,3}/g), // 63개 문자(Word, 영문 대소문자 52개 + 숫자 10개 + _)에 일치
    str.match(/\b\w{2,3}\b/g) //63개 문자(영문 대소문자 52개 + 숫자 10개 + _(underscore))가 아닌 나머지 문자에 일치하는 경계(boundary)
)

console.log(
    str.match(/[fox]/g),
    str.match(/[0-9]/g),
    str.match(/[0-9]{1,}/g),
    str.match(/[가-힣]{1,}/g)
)

console.log(
    str.match(/\b/g),
    str.match(/\bf\w/g),
    str.match(/\bf\w{1,}/g),
    str.match(/\bf\w{1,}\b/g),
    str.match(/\d/g),
    str.match(/\d{1,}/g),
    str.match(/\s/g),
)

const h = `    the hello     world   !`
console.log(
    h.replace(/\s/g, '')
)

console.log(
    //@ 기준으로 parsing
    str.match(/.{1,}(?=@)/g),
    // str.match(/(?=@).{1,}/g),
    // str.match(/.{1,}(?<=@)/g),
    str.match(/(?<=@).{1,}/g)    
)
