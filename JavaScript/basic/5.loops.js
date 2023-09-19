/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

// 1부터 10까지 출력
for(let i = 1; i <= 10; i++){
    console.log(i);
}

//5~15까지 모든 수의 합
let sum = 0;
for(let i = 5; i <= 15; i++){
    sum += i;
}
console.log(sum);

//1단~9단 구구단 출력
for(let dan = 1; dan < 10; dan++){
    console.log('====' +  dan + '단====');  

    for(let i = 1; i < 10; i++){
    console.log(dan + ' * ' + i + ' = ' + (dan * i));
    }
}

/**
 * for .. in (map)
 */

const human = {
    name : 'gayeon',
    age : 23,
    gender : '여자'
}

for(let key in human){
    console.log(human[key]);
    console.log(key + ":" + human[key]);
}

/**
 * for .. of  (배열)
 */

human = ['jiwon', 'sumin', 'so'];

for(let value of human){
    console.log(value);
}

/**
 * while
 */

let number = 0;

while(number < 11){
    console.log(number);
    number++;
}

/**
 * do .. while
 */

number = 0;

do{
    console.log(number);
    number++;
}while(number < 11);

/**
 * break
 * continue
 */

number = 0;
while(number < 11){
    if(number % 2 === 1){
        number++;
        continue;
    }
    console.log(number);
    number++;
}

number = 0;
while(true){
    console.log(number);
    number++;

    if(number > 10){
        break;
    }
}