// 1

str1 = 'js';
console.log(str1.toUpperCase());

// 2

function task2(array, string) {
    let newArray = [];
    array.forEach(element => {
        if (element.toLowerCase().startsWith(string.toLowerCase())) {
            newArray.push(element);
        };
    });
    return newArray;
};

// 3
const number = 32.58884
const floorNumber = Math.floor(number)
const ceilNumber = Math.ceil(number)
const roundNumber = Math.round(number)
console.log(floorNumber, ceilNumber, roundNumber)

// 4
const maxNumber = Math.max(52, 53, 49, 77, 21, 32)
const minNumber = Math.min(52, 53, 49, 77, 21, 32)
console.log(minNumber, maxNumber)

// 5
function randomNumber() {
    console.log(Math.ceil(Math.random() * 10))
}

// 6
function task6(num) {
    let array = [];
    for (let i=0; i < num/2; i++) {
        array.push(Math.floor(Math.random() * (num+1)));
    };
    return array;
};

// 7
function task7(min, max) {
    let num = min + Math.random() * (max + 1 - min);
    return Math.floor(num);
};

// 8
const date = new Date;
const options = {year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = date.toLocaleDateString('ru-RU', options);
console.log(formattedDate);

// 9
let currentDate = new Date;
const days73 = 73 * 24 * 60 * 60 * 1000;
const searchDate = +currentDate + days73;
const newDate = new Date(searchDate);
console.log(newDate);

// 10
const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг",
    "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
function printDate(date) {
    str = `Дата: ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()} - это ${days[date.getDay()]}. Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    return str
}
