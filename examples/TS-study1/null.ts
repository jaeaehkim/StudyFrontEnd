// tsconfig strict true
// let MyName: string = null; 
// 무언가 아예 준비가 안된 상태
let v: void = undefined;
console.log(typeof v)

// null이라는 것 : 무언가 있는데 사용할 준비가 덜 된 상태
// runtime 에서 typeof로 알아내면 object
let union: string | null = null;
console.log(typeof union);
union = "Mark";
console.log(typeof union)
