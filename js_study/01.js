// 변수 선언 => let, const
// let은 값을 재할당할수 있는 변수를 선언할 때 사용함.
let name = "구영현";
console.log(name);
// sout이랑 비슷하다고 보면됨, 세미콜론은 안 찍음
console.log("hello world");
name = "십영현";
console.log(name);

//const는 한 번 할당하면 값을 변경할 수 없는 상수를 선언할 때 사용
const age = 27;
console.log(age);

// 연산자
// 동등 연산자 => ==, ===
// == : 값만 비교, 필요한 경우 알아서 암시적 타입 변환.
let data1 = 10;
let data2 = "10";
let result1 = data1 == data2;
console.log(result1); // true

// 일치 연산자(===) : 값과 타입을 모두 비교
let result2 = data1 === data2;
console.log(result2); // false

// typeof 연산자
// 변수의 데이터 타입을 확인.
console.log(typeof data1, typeof data2)

// 문자열 연결과 숫자 출력의 차이.
console.log("1" + "2")
console.log(1,2)

// not 연산자
console.log(!1)
console.log(!0)
console.log(!"a")
console.log(!"")
console.log(!null)
console.log(!undefined) 

console.log("".length > 0) // 빈 문자열의 길이가 0보다 크냐?
console.log(!"" === false)

let data = {
    name: "구영현",
    age: 27,
};

if (!data) {
    console.log("데이터가 없습니다."); 
} else if(data.name === "삼동윤") {
    console.log("사용자 이름이 일치하지 않음.")
} else if (data.age === 27) {
    console.log("사용자 이름은 일치하지 않지만, 나이는 일치함.")
} else {
    console.log("사용자가 일치하지 않음.);
}

for (let i = 0; i < 10; i++) {
    console.log(i);
}