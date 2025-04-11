// 1
console.log('Задание 1');
let task1 = [1, 5, 4, 10, 0, 3];
for (let i=0; i < task1.length; i++ ) {
    console.log(task1[i]);
    if (task1[i] == 10) {
        break;
    };
};

// 2
console.log('Задание 2');
let task2 = [1, 5, 4, 10, 0, 3];
console.log(task2.indexOf(4))

// 3
console.log('Задание 3');
let task3 = [1, 3, 5, 10, 20];
console.log(task3.join(" "));

// 4
console.log('Задание 4');
let task4 = [];
const elements = 3;
const elementsInElement = 3;
for (let i=0; i < elements; i++) {
    let temp = [];
    for (let j=0; j < elementsInElement; j++) {
        temp.push(1);
    };
    task4.push(temp);
};
console.log(task4);

// 5
console.log('Задание 5');

let task5 = [1, 1, 1];
task5.push(2, 2, 2)
console.log(task5)
// 6 
console.log('Задание 6');

let task6 = [9, 8, 7, 'a', 6, 5];

task6 = task6.filter((item) => item !== 'a');
task6.sort((a, b) => a - b);
console.log(task6);

// 7
// console.log('Задание 7');

// let task7 = [9, 8, 7, 6, 5];
// let userNumber = Number(prompt('Угадайте число'));

// alert(task7.includes(userNumber) ? 'Угадал' : 'Не угадал');
// 8
console.log('Задание 8');

let task8 = 'abcdef';
console.log(task8.split('').reverse().join(''));

// 9
console.log('Задание 9');

let task9 = [[1, 2, 3],[4, 5, 6]];
let task9result = [];
for (let i=0; i < task9.length; i++) {
    for (let j=0; j < task9[i].length; j++) {
        task9result.push(task9[i][j]);
    };
};
console.log(task9result);
// 10
console.log('Задание 10');

let task10 = [1,2,4,9,5];
for (let i=0; i < task10.length; i++) {
    if (task10[i+1] == undefined) {
        break;
    };
    console.log(task10[i] + task10[i+1]);
};
// 11
console.log('Задание 11');

let task11 = function(array) {
    return (array.map(elem => elem ** 2));
};
console.log(task11([1,2,5,8,4]));


// 12
console.log('Задание 12');

let task12 = function(array) {
    return (array.map(elem => elem.length));
};
console.log(task12(['apple', 'pear', 'banana', 'plum', 'grape']));

// 13 
console.log('Задание 13');

let task13 = function(array) {
    return array.filter((elem) => elem < 0);
};
console.log(task13([1,-1,30,-10,-3,0]));
// 14
console.log('Задание 14');

let task14 = [];
for (let i=0; i < 10; i++) {
    task14.push(Math.round(Math.random() * 10));
};
let task14even = task14.filter(elem => elem % 2 == 0);
console.log(task14, task14even)
// 15
console.log('Задание 15');

let task15 = [];
for (let i=0; i < 6; i++) {
    task15.push(Math.round(Math.random() * 10));
};
let sum = task15.reduce((total, number) => total + number);

console.log(sum / 6)