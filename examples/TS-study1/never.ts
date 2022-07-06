// never 타입은 모든 타입의 sub type
// 어떤 것도 할당할 수 없으며 any 조차도 never에게 할당 할 수 없음
// 잘못된 타입을 넣는 실수를 막고자 할 떄 사용하기도 함

function error(message: string): never {
    throw new Error(message);
}

function fail() {
    return error("failed");
}

function infiniteLoop(): never {
    while (true) {}
}

// let a: string = "hello";
declare const a: string | number;

if (typeof a !== 'string') {
    a;
}