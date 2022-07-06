// any와 짝으로 any보다 Type-safe한 타입
// any와 같이 아무거나 할당, 타입 추론 유형 좁히고, 타입 확정하지 않으면 다른 곳에 할당할 수 없고 사용할 수 없음
// unknow 타입을 사용하면 runtime error를 줄일 수 있다.

declare const maybe: unknown;

// const aNumber: number = maybe;

if (maybe === true) {
    const aBoolean: boolean = maybe;
    // const aString: string = maybe;
}

if (typeof maybe === "string") {
    const aString: string = maybe;
    // const aBoolean: boolean = maybe;
}

