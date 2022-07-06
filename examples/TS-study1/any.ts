// any는 어떤 타입이어도 상관없는 타입, 최대한 사용하지 않는게 핵심
// 개체를 통해 전파 되고 이는 편의를 얻고 안전성을 얻게 됨
function returnAny(message: any): any {
    console.log(message)
}

const any1 = returnAny("리턴은 아무거나");

any1.toString();


let looselyTyped: any = {};

const e = looselyTyped.a.b.c.d;

function leakingAny(obj: any) {
    const a: number = obj.num;
    const b = a + 1;
    return b;
}

const f = leakingAny({num: 0 });
// f.indexOf("0"); // number로 누수를 막아 에러를 생성시킴.