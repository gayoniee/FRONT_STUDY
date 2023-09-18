console.log('Hello World');
console.log('Hello' + 'World', '!');

//주석을 작성하는 첫번째 방법
console.log('안녕') //안녕을 출력

/**
 * 이렇게 작성하면
 * 여러줄을 한번에 주석처리 할 수 
 * 있습니다.
 */



/**
 * Variable 선언
 * 
 * 1) var - 사용하지 않음
 * 2) let
 * 3) const
 */

var name = "홍가연";
console.log(name);

var age = 23;
console.log(age);

var pi = 3.14;
console.log(pi);

var name = "강아지"
console.log(name);

/**
 * let은 var에서 같은 이름의 중복생성을 하지 못하게 만든 자료형이다.
 * 다만 let과 var는 모두 값을 변경하는 것은 가능하다.
 */

let name2 = "홍가연";
console.log(name2);

name2 = '강아지';
console.log(name2);

/**
 * const는 상수를 표현하기위한 자료형
 * 값을 변경할 수 없다.
 */

const name3 = "홍가연";
name3 = "강아지";
console.log(name3);

/**
 * Naming
 * 
 * 변수 이름 지을때
 * 1) 일반적으로 영어를 사용하며 문자와 숫자 모두 사용할 수 있다.
 * 2) 특수문자는 언더스코어와 달러를 사용할 수 있다.
 * 3) 숫자로 이름을 시작할 수 없다.
 * 4) 키워드를 변수명으로 사용할 수 없다.(let, for 등등)
 */

/**
 * Naming Type
 * 1) camelCase  => 대부분의 언어에서 많이 사용하며 단어의 시작마다 대문자로 구분
 * 2) snake_case => 파이썬에서 주로 사용하며 단어의 시작마다 _로 구분
 * 3) PascalCase => c# 및 ms 계열의 언어에서 많이 사용하며 단어의 시작은 무조건 대문자
 */

/**
 * Data Types
 * 
 * 여섯개의 원시타입과 한개의 오브젝트 타입이 있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined (언디파인드)
 * 5) null (널)
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */


// Number 타입

const age = 55;
const temperature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof temperature);
console.log(typeof pi);

const infinity = Infinity;
const ninfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof ninfinity);

// String 타입

const name = "홍가연";
console.log(name);
console.log(typeof name);


/**
 * 1) newline => \n
 * 2) tab => \t
 * 3) \ => \\
 */

const str = "안녕하세요 저는 ㅇㅇㅇ입니다.\n \t 나이는 00살 입니다.";
console.log(str);

const name = "홍가연";
console.log(`안녕하세요 ${name}입니다`);

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);


/**
 * undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값이다.
 * 
 * undefined를 직접 넣어주는 것을 지양해야함
 */

let num;
console.log(num);
console.log(typeof num);

/**
 * null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻
 * 다만 js에서는 개발자가 명시적으로 없는 값을 초기화할 때
 * null을 사용한다.
 */

let init = null;
console.log(init);
console.log(typeof init);

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용
 * 다른 원시값들과 다르게 심볼함수를 호출해서 사용함
 */

const tmp1 = '1';
const tmp2 = '1';
console.log(tmp1 === tmp2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1);
console.log(symbol2);
console.log(symbol1 === symbol2);


/**
 * Object 타입
 * 
 * Map
 * 키: 벨류 쌍으로 이루어져 있다
 * key: value
 */

const dictionary = {
    red : "빨간색",
    orange : "주황색",
    yellow : "노란색"
}
console.log(typeof dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);
console.log(dictionary.yellow);


/** 
 * Array 타입
 * 
 * 값을 리스트로 나열할 수 있는 타입
*/

const arr = ["빨간색", "주황색", "노란색", "초록색"];
console.log(arr[3]);

arr.push('파란색');
console.log(arr.length);


/**
 * index
 * 
 * 0부터 시작한다
 * 1씩 올라간다
 */

console.log(arr[0]);
console.log(arr[4]);

arr[0] = 12;
console.log(arr);
